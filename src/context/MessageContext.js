import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

export const MessageContext = createContext();

export const MessageContextProvider = (props) => {
  // const [messageText, setMessage] = useState("");
  const [messageText, setMessage] = useState("");

  return (
    <MessageContext.Provider value={[messageText, setMessage]}>
      {props.children}
    </MessageContext.Provider>
  );
};

MessageContextProvider.propTypes = {
  children: PropTypes.node,
};
