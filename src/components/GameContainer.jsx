import { useState, useReducer, useRef, useEffect } from "react";
import PropTypes from "prop-types";

// Components
import { Container } from "./Container";
import { Statistics } from "./Statistics";
import { Adjustments } from "./Adjustments";
import { BoardContainer } from "./BoardContainer";
import { LanguageSelector } from "./LanguageSelector";
import { WordCountSelector } from "./WordCountSelector";
import { BoardErrorBoundary } from "./BoardErrorBoundary";
import { BoardSuspense } from "./BoardSuspense";
import { Board } from "./Board";
import { BoardActions } from "./BoardActions";
import { Notice } from "./Notice";
import { LetterAnalysis } from "./LetterAnalysis";

// api
import { fetchWordsData } from "../api/fakeApi";

// utils
import { calculateAccuracy, calculateWordsPerMinute } from "../utils";

// i18
import { useTranslation } from "../i18n";
import { useLocalStorage } from "../hooks/useLocalStorage";

const statusReducer = (s, a) => ({ ...s, ...a });
const initialStatus = { status: "idle" };

export function GameContainer({ onReset }) {
  const { language, changeLanguage } = useTranslation();
  const [selectedWordAmount, setSelectedWordAmount] = useLocalStorage(
    "word-amount",
    "200"
  );

  const [resource, setResource] = useState(
    fetchWordsData(language, selectedWordAmount)
  );
  const [{ status }, setStatus] = useReducer(statusReducer, initialStatus);

  const [resultsMap, setResultsMap] = useState(new Map());
  const wordsRef = useRef([]);
  const [boardOffsetTop, setBoardOffsetTop] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [analysis, setAnalysis] = useState({
    pressedKeys: [],
    currentKey: "",
  });

  const [statistics, setStatistics] = useState({
    keystrokes: 0,
    corrects: 0,
    wrongs: 0,
    accuracy: 0,
    wordsPerMinute: 0,
  });

  const [adjustments, setAdjustments] = useLocalStorage("game-adjustments");

  const isGameEnd = status === "end";
  const isGameIdle = status === "idle";

  const loaderClass = adjustments.boardSize;

  const startGame = () => setStatus({ status: "start" });

  const finishGame = () => {
    setStatus({ status: "end" });

    setStatistics((sta) => ({
      ...sta,
      accuracy: calculateAccuracy(statistics.corrects, statistics.wrongs),
    }));

    setStatistics((sta) => ({
      ...sta,
      wordsPerMinute: calculateWordsPerMinute(
        statistics.corrects + statistics.wrongs
      ),
    }));
  };

  const resetGame = () => {
    onReset();
  };

  const handleAnswer = (value) => {
    const correct = value === resource.words.read()[currentIndex];

    // get current item offset to check that it has moved to the next row
    const offsetTop = wordsRef.current[currentIndex].offsetTop;

    if (correct) {
      setResultsMap((map) => map.set(currentIndex, "correct"));

      setStatistics((sta) => ({
        ...sta,
        corrects: sta["corrects"] + 1,
      }));
    } else {
      setResultsMap((map) => map.set(currentIndex, "wrong"));

      setStatistics((sta) => ({
        ...sta,
        wrongs: sta["wrongs"] + 1,
      }));
    }

    if (offsetTop > boardOffsetTop) {
      setBoardOffsetTop(offsetTop);
    }

    setCurrentIndex(currentIndex + 1);
  };

  const changeAdjustments = (adjustments) => {
    setAdjustments(adjustments);
  };

  const handleLetterAnalysis = (updatedAnalysis, keystrokes) => {
    setAnalysis(() => ({ ...updatedAnalysis }));
    setStatistics((sta) => ({ ...sta, keystrokes }));
  };

  const handleSelectWordAmount = (e) => {
    setCurrentIndex(0);
    setSelectedWordAmount(e.target.value);
  };

  const handleSelectLanguage = (e) => {
    setCurrentIndex(0);
    changeLanguage(e.target.value);
  };

  useEffect(() => {
    setResource(fetchWordsData(language, selectedWordAmount));
  }, [language, selectedWordAmount]);

  return (
    <Container className="relative">
      {/* 
          Statistics Menu 
        */}
      <Statistics statistics={statistics} isGameEnd={isGameEnd} />
      {/* 
          Adjustments Menu 
        */}
      <Adjustments
        canAdjust={isGameIdle}
        onAdjustmentChange={changeAdjustments}
      />

      {/* 
          Board Container 
        */}
      <BoardContainer>
        {/* 
            Language Selector 
          */}
        <LanguageSelector handleSelectLanguage={handleSelectLanguage} />

        {/* 
            Word Count Selector 
          */}
        <WordCountSelector
          amount={selectedWordAmount}
          handleSelectWordAmount={handleSelectWordAmount}
        />

        {/* 
            Board 
          */}
        <BoardErrorBoundary>
          <BoardSuspense loaderClass={loaderClass}>
            <Board
              resource={resource}
              gameAdjustments={adjustments}
              boardOffsetTop={boardOffsetTop}
              wordsRef={wordsRef}
              currentIndex={currentIndex}
              results={resultsMap}
            />
          </BoardSuspense>
        </BoardErrorBoundary>

        {/* 
            Board Actions 
          */}
        <BoardActions
          handleLetterAnalysis={handleLetterAnalysis}
          status={status}
          onAnswer={handleAnswer}
          onStartTyping={startGame}
          onRefresh={resetGame}
          onTimeEnd={finishGame}
        />
      </BoardContainer>

      {/* 
          Notice 
        */}
      {isGameEnd && <Notice translationKey="info.restart" />}
      {isGameIdle && <Notice translationKey="info.start" />}

      {/* 
          Letter Analysis 
        */}
      <LetterAnalysis analysis={analysis} isGameEnd={isGameEnd} />
    </Container>
  );
}

GameContainer.propTypes = {
  onReset: PropTypes.func.isRequired,
};
