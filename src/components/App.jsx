import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { NotificationMessage } from './NotificationMessage/NotificationMessage';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGoodFeedback = () =>
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));

  onNeutralFeedback = () =>
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));

  onBadFeedback = () =>
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));

  render() {
    const { good, bad, neutral } = this.state;
    const totalFeedback = good + bad + neutral;
    const positivePercentage = Math.round((good * 100) / totalFeedback);

    return (
      <div>
        <SectionTitle title="Please Leave Feedback" />
        <FeedbackOptions
          onLeaveGoodFeedback={this.onGoodFeedback}
          onLeaveNeutralFeedback={this.onNeutralFeedback}
          onLeaveBadFeedback={this.onBadFeedback}
        />
        {good === 0 && bad === 0 && neutral === 0 ? (
          <NotificationMessage message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        )}
      </div>
    );
  }
}
