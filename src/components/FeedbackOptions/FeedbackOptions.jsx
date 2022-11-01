import PropTypes from 'prop-types';
import { Button } from "./FeedbackOptions.styles";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    const keys = Object.keys(options);
    const buttons = keys.map(key => {
        return <Button key={key} type="button" onClick={() => onLeaveFeedback(key)}>{key}</Button>
    });
    return (
        <>
            {buttons}
        </>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.objectOf(PropTypes.number),
    onLeaveFeedback: PropTypes.func.isRequired,
};