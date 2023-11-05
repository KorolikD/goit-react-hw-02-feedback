export const countTotalFeedback = obj =>
  Object.values(obj).reduce((acc, el) => acc + el, 0);
