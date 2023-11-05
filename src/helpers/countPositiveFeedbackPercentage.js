import { countTotalFeedback } from './countTotalFeedback';

export const countPositiveFeedbackPercentage = obj => {
  const totalFeedback = countTotalFeedback(obj);
  const positiveFeedbackPercentage = (obj['good'] * 100) / totalFeedback;

  return Math.round(positiveFeedbackPercentage);
};
