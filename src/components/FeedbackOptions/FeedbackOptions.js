import React from 'react';
import { Button, Buttons } from 'components';
import { capitalLetterWord } from 'helpers/capitalLetterWord';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Buttons>
      {Object.keys(options).map(evaluation => (
        <Button
          key={evaluation}
          type="button"
          name={evaluation}
          onClick={() => {
            onLeaveFeedback(evaluation);
          }}
        >
          {capitalLetterWord(evaluation)}
        </Button>
      ))}
    </Buttons>
  );
};
