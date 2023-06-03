import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
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

  // totalFeedback = () => {
  //   const { good, bad, neutral } = this.state;
  //   return good + bad + neutral;
  // };
  // positivePercentage = () => {
  //   const { good } = this.state;
  //   Math.round((good * 100) / this.totalFeedback);
  // };

  render() {
    const { good, bad, neutral } = this.state;
    const totalFeedback = good + bad + neutral;
    const positivePercentage = Math.round((good * 100) / totalFeedback);

    return (
      
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            onLeaveGoodFeedback={this.onGoodFeedback}
            onLeaveNeutralFeedback={this.onNeutralFeedback}
            onLeaveBadFeedback={this.onBadFeedback}
          />
        </Section>
        {good === 0 && bad === 0 && neutral === 0 ? (
          <NotificationMessage message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          </Section>
        )}
      </div>
    );
  }
}
