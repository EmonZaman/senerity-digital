import React, { createContext, useReducer } from "react";
import { useCookies } from "react-cookie";

const initialState = {
  token: null,
  is_superuser: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.value.token,
        is_superuser: action.value.is_superuser,
      };
    case "LOGOUT":
      return {
        token: null,
        is_superuser: null,
      };
    default:
      return state;
  }
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};
