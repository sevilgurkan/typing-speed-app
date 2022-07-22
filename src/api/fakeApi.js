import { getWords } from "../data";

export function fetchWordsData(language, amount) {
  const wordsPromise = fetchWords(language, amount);

  return {
    words: wrapPromise(wordsPromise),
  };
}

function wrapPromise(promise) {
  let status = "pending";
  let result;
  let data;
  let error;

  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
      data = r;
    },
    (e) => {
      status = "error";
      result = e;
      error = e;
    }
  );

  return {
    read() {
      if (status === "pending") throw suspender;
      else if (status === "error") throw result;
      else if (status === "success") return result;
    },
  };
}

function fetchWords(language, amount) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getWords(language, amount));
    }, 1100 * Math.random());
  });
}
