import PropTypes from 'prop-types';
import { Button } from "./FeedbackOptions.styles";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    const buttons = options.map(option => {
        return <Button key={option} type="button" onClick={() => onLeaveFeedback(option)}>{option}</Button>
    });
    return (
        <>
            {buttons}
        </>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
};