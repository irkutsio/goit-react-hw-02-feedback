import PropTypes from "prop-types";

export const NotificationMessage = ({ message }) => {
  return <h3>{message}</h3>;
};


NotificationMessage.propTypes = {
    message: PropTypes.string.isRequired,
}