import { useState } from 'react';
import { loginApi, signupApi } from '../../shared/api/auth';
import { setJwt } from '~/shared/lib/jwt';

type AuthState = {
  isAuthenticated: boolean;
  user: null | {
    email: string;
  };
  accessToken: null | string;
  refreshToken: null | string;
};

const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: { email: '' },
    accessToken: null,
    refreshToken: null,
  });

  const login = async (email: string, password: string) => {
    try {
      const { access_token, refresh_token, user } = await loginApi({ email, password });
      setJwt(access_token);
      setAuthState({
        isAuthenticated: true,
        user: { email: user.email },
        accessToken: access_token,
        refreshToken: refresh_token,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const signup = async (username: string, email: string, password: string) => {
    try {
      const { access_token, refresh_token, user } = await signupApi({ username, email, password });
      setJwt(access_token);
      setAuthState({
        isAuthenticated: true,
        user: { email: user.email },
        accessToken: access_token,
        refreshToken: refresh_token,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem('jwt');
    setAuthState({
      isAuthenticated: false,
      user: null,
      accessToken: null,
      refreshToken: null,
    });
  };

  return {
    ...authState,
    login,
    signup,
    logout,
  };
};

export { useAuth };
