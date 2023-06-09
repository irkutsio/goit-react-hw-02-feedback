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

  handleFeedback = event => {
    // console.log(event.currentTarget);
    const { name } = event.currentTarget;
    // console.log(name)
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  totalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };
  positivePercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.totalFeedback());
  };

  render() {
    const { good, bad, neutral } = this.state;

    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            handleFeedback={this.handleFeedback}
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
              total={this.totalFeedback()}
              positivePercentage={this.positivePercentage()}
            />
          </Section>
        )}
      </div>
    );
  }
}
