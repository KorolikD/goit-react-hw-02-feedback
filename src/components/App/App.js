import { FeedbackOptions, Section, Statistics } from 'components';
import { countPositiveFeedbackPercentage } from 'helpers/countPositiveFeedbackPercentage';
import { countTotalFeedback } from 'helpers/countTotalFeedback';
import { Component } from 'react';
import { GlobalStyles } from 'styles';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = evaluation => {
    this.setState(prevState => ({ [evaluation]: prevState[evaluation] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    const totalFeedback = countTotalFeedback(this.state);
    const positiveFeedbackPercentage = countPositiveFeedbackPercentage(
      this.state
    );

    return (
      <>
        <GlobalStyles />

        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }
}
