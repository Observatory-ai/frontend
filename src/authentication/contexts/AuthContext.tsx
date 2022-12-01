import React, { createContext, useReducer } from 'react';
import { User } from '../types/user';

const initialState = {
  user: null,
};

type AuthContextValues = {
  user: User | null;
};

export const AuthContext = createContext<{
  user: User | null;
  dispatch: React.Dispatch<{
    type: AuthReducerAction;
    payload: AuthContextValues;
  }>;
}>({ ...initialState, dispatch: () => null });

export enum AuthReducerAction {
  setCredentials,
  logout,
}

const AuthReducer = (state: AuthContextValues, action: { type: AuthReducerAction; payload: AuthContextValues }) => {
  switch (action.type) {
    case AuthReducerAction.setCredentials:
      return { user: action.payload.user };

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
