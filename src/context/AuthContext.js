import React, { useState, createContext } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <AuthContext.Provider value={[isAuthorized, setIsAuthorized]}>
      {props.children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};
