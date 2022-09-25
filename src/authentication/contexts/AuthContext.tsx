import React, { createContext, useReducer } from 'react';
import { User } from '../types/user';

const initialState = {
  user: null,
  accessToken: null,
};

type AuthContextValues = {
  user: User | null;
  accessToken: string | null;
};

export const AuthContext = createContext<{
  user: User | null;
  accessToken: string | null;
  dispatch: React.Dispatch<any>;
}>({ ...initialState, dispatch: () => null });

export enum AuthReducerAction {
  loginOrRegister,
  refreshToken,
  logout,
}

const AuthReducer = (state: AuthContextValues, action: { type: AuthReducerAction; payload: AuthContextValues }) => {
  switch (action.type) {
    case AuthReducerAction.loginOrRegister:
      return { accessToken: action.payload.accessToken, user: action.payload.user };
    case AuthReducerAction.refreshToken:
      return { ...state, accessToken: action.payload.accessToken };
    case AuthReducerAction.logout:
      return { ...initialState };
    default:
      return state;
  }
};

const AuthContextProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const [authContextValues, dispatch] = useReducer(AuthReducer, initialState);

  return <AuthContext.Provider value={{ ...authContextValues, dispatch }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
