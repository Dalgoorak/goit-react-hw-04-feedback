import React from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  onBtnNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  onBtnBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const goodFeedback = this.state.good;
    let result = 0;
    if (total > 0) {
      result = Math.ceil((goodFeedback / total) * 100);
    }
    return result;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGood={this.onBtnGood}
            onNeutral={this.onBtnNeutral}
            onBad={this.onBtnBad}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positiveFeedback={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}
