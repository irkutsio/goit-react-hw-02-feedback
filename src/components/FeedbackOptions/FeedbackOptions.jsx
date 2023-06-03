import PropTypes from 'prop-types';

export const FeedbackOptions = ({
  onLeaveBadFeedback,
  onLeaveNeutralFeedback,
  onLeaveGoodFeedback,
}) => (
  <div>
    <button onClick={onLeaveGoodFeedback}>Good</button>
    <button onClick={onLeaveNeutralFeedback}>Neutral</button>
    <button onClick={onLeaveBadFeedback}>Bad</button>
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveBadFeedback: PropTypes.func.isRequired,
  onLeaveNeutralFeedback: PropTypes.func.isRequired,
  onLeaveGoodFeedback: PropTypes.func.isRequired,
};
