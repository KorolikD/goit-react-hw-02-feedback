// import { capitalLetterWord } from 'helpers/capitalLetterWord';
import React from 'react';
import { StatisticsItems } from './Statistics.styled';
import { Notification } from 'components/Notification/Notification ';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsItems>
      {total === 0 ? (
        <Notification message="There is no feedback"></Notification>
      ) : (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          {total !== 0 && <p>Total: {total}</p>}
          {total !== 0 && <p>Positive feedback: {positivePercentage}</p>}
        </>
      )}
    </StatisticsItems>
  );
};
