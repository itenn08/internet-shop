import React from "react";
import PropTypes from "prop-types";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const Message = (props) => (
  <Snackbar
    open={props.messageState}
    autoHideDuration={6000}
    onClose={props.onClose}
  >
    <Alert onClose={props.onClose} severity={props.type}>
      {props.message}
    </Alert>
  </Snackbar>
);

Message.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  messageState: PropTypes.bool,
};

export default Message;
