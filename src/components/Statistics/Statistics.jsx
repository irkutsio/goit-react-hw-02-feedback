import PropTypes from 'prop-types';
import { StatisticsWrapper } from './Statistics.styled';



export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <StatisticsWrapper>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>total: {total}</p>
    <p>
      positive Feedback: {positivePercentage >= 0 ? positivePercentage : 0} %
    </p>
  </StatisticsWrapper>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
