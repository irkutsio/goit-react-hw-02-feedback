import PropTypes from 'prop-types';
import { FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  onLeaveBadFeedback,
  onLeaveNeutralFeedback,
  onLeaveGoodFeedback,
}) => (
  <div>
    <FeedbackBtn onClick={onLeaveGoodFeedback}>Good</FeedbackBtn>
    <FeedbackBtn onClick={onLeaveNeutralFeedback}>Neutral</FeedbackBtn>
    <FeedbackBtn onClick={onLeaveBadFeedback}>Bad</FeedbackBtn>
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveBadFeedback: PropTypes.func.isRequired,
  onLeaveNeutralFeedback: PropTypes.func.isRequired,
  onLeaveGoodFeedback: PropTypes.func.isRequired,
};
