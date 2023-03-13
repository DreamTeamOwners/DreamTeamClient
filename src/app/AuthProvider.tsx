import React from 'react';
import { useAuth } from '../processes/auth/useAuth';

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = React.createContext<any>({});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
