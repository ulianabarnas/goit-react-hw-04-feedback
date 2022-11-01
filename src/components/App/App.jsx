
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import Box from 'components/Box/Box';
import { useState } from 'react';



export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  
  const leaveFeedback = (propertyName) => {
    switch (propertyName) {
      case "good":
        setGood()
        break;
      case "neutral":
        setNeutral();
        break;
      case "bad":
        setBad();
        break;
      default:
        break;
    }

    this.setState((prevState) => {
      return {
        [propertyName]: prevState[propertyName] + 1,
      }
    })
  }

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positiveValue = good;

    return Math.round((positiveValue / total) * 100);
  }

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
          options={this.state}
          onLeaveFeedback={leaveFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0
          ? <Notification message="There is no feedback" />
          : <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage}
          />}
      </Section>
    </Box>
  );
}



// export default class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }

//   leaveFeedback = (propertyName) => {
//     this.setState((prevState) => {
//       return {
//         [propertyName]: prevState[propertyName] + 1,
//       }
//     })
//   }

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;

//     return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     const positiveValue = this.state.good;

//     return Math.round((positiveValue / total) * 100);
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();

//     return (
//       <Box
//         as="section"
//         maxWidth="400px"
//         width="80vw"
//         textAlign="center"
//         mx="auto"
//         mt={5}
//         bg="white"
//         borderRadius="normal"
//         boxShadow="normal"
//         overflow="hidden"
//         >
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={this.state}
//             onLeaveFeedback={this.leaveFeedback} />
//         </Section>
//         <Section title="Statistics">
//           {total === 0
//             ? <Notification message="There is no feedback"/>
//             : <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={this.countPositiveFeedbackPercentage}
//           />}
//         </Section>
//       </Box>
//     )
//   }
// }

