import { useState } from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import Box from 'components/Box/Box';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = (propertyName) => {
    switch (propertyName) {
      case "good":
        setGood(prev => prev + 1)
        break;
      case "neutral":
        setNeutral(prev => prev + 1);
        break;
      case "bad":
        setBad(prev => prev + 1);
        break;
      default:
        break;
    };
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = (good, total) => {
    return Math.round((good / total) * 100);
  };

  return (
    <Box
      as="section"
      maxWidth="400px"
      width="80vw"
      textAlign="center"
      mx="auto"
      mt={5}
      bg="white"
      borderRadius="normal"
      boxShadow="normal"
      overflow="hidden"
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={leaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total === 0
          ? <Notification message="There is no feedback" />
          : <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage}
          />}
      </Section>
    </Box>
  );
};