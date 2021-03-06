import React, { useContext } from 'react';

//Token Context
export const TokenContext = React.createContext({
  token: localStorage.getItem('accessToken') ? true : false,
  // token: null,
  setToken: data => {},
});

//Use Token Context
export function useTokenContext() {
  return useContext(TokenContext);
}
