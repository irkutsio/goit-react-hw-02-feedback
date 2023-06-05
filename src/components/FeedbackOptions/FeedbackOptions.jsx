import PropTypes from 'prop-types';
import { FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, handleFeedback }) => {
  return options.map((option, idx) => (
    <FeedbackBtn key={idx} type="button" name={option} onClick={handleFeedback}>
      {option}
    </FeedbackBtn>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  handleFeedback: PropTypes.func.isRequired,
};
