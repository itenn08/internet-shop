import React from "react";
import PropTypes from "prop-types";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const Message = ({ text, type, onClose }) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    onClose();
    setOpen(false);
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type}>
          {text}
        </Alert>
      </Snackbar>
    </>
  );
};

Message.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClose: PropTypes.func,
};

export default Message;
