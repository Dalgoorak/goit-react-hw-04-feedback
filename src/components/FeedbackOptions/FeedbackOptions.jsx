import React from 'react';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <div className={css.feedback__options}>
      <button type="button" className={css.feedback__btn} onClick={onGood}>
        Good
      </button>
      <button type="button" className={css.feedback__btn} onClick={onNeutral}>
        Neutral
      </button>
      <button type="button" className={css.feedback__btn} onClick={onBad}>
        Bad
      </button>
    </div>
  );
};
