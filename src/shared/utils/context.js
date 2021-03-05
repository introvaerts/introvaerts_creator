import React, { useContext } from 'react';

//Token Context
export const TokenContext = React.createContext({
  token: localStorage.getItem('accessToken') ? true : false,
  setToken: data => {},
});

//Use Token Context
export default function useTokenContext() {
  console.log('ContextToken' + TokenContext.token);
  return useContext(TokenContext);
}
