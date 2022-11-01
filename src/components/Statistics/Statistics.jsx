import { AiFillLike } from 'react-icons/ai';
import PropTypes from 'prop-types';
import Box from "components/Box/Box";
import { Text, Value } from "./Statistics.styles";

export default function Statistics ({ good, neutral, bad, total, positivePercentage }) {
  return (
    <Box
      display={["block", "flex"]}
      alignItems="flex-end"
      justifyContent="space-between"
    >
      <Box
        textAlign="left">
        <p><Text>Good: </Text><Value>{good}</Value></p>
        <p><Text>Neutral: </Text><Value>{neutral}</Value></p>
        <p><Text>Bad: </Text><Value>{bad}</Value></p>
      </Box>
      <Box
        display="flex"
        alignItems="flex-end"
        textAlign="left">
        <Box
          display={["none", "flex"]}
          pb="3px"
          pr="2px">
          <AiFillLike fill="#fff" size="20px" />
        </Box>
        <Box
          mt={[4, 0]}>
          <p><Text>Total: </Text><Value>{total}</Value></p>
          <p><Text>Positive feedback: </Text><Value>{positivePercentage()}%</Value></p>
        </Box>
      </Box>
    </Box>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};