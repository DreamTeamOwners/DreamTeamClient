import jwtDecode from 'jwt-decode';

type DecodedJwtToken = {
  exp: number;
  iat: number;
  sub: string;
};

const setJwt = (token: string) => {
  localStorage.setItem('jwt', token);
};

const getJwt = (): string | null => {
  return localStorage.getItem('jwt');
};

const decodeJwt = (): DecodedJwtToken | null => {
  const token = getJwt();
  if (token) {
    try {
      const decodedToken = jwtDecode<DecodedJwtToken>(token);
      return decodedToken;
    } catch (error) {
      console.error(error);
    }
  }
  return null;
};

const isJwtExpired = (): boolean => {
  const decodedToken = decodeJwt();
  if (decodedToken && decodedToken.exp) {
    const currentTime = Math.floor(Date.now() / 1000);
    return decodedToken.exp < currentTime;
  }
  return true;
};

export { setJwt, getJwt, decodeJwt, isJwtExpired };
