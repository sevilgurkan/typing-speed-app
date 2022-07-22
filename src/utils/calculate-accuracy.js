export const calculateAccuracy = (corrects, wrongs) => {
  if (corrects + wrongs === 0) return 0;

  const result = (corrects / (corrects + wrongs)) * 100;

  return Number.isInteger(result) ? result : result.toFixed(2);
};
