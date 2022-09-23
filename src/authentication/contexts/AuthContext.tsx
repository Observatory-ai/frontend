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
  setUser,
  setAccessToken,
}

const AuthReducer = (state: AuthContextValues, action: { type: AuthReducerAction; payload: AuthContextValues }) => {
  switch (action.type) {
    case AuthReducerAction.setUser:
      return { ...state, user: action.payload.user };
    case AuthReducerAction.setAccessToken:
      return { ...state, accessToken: action.payload.accessToken };
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
