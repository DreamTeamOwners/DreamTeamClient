import ky from 'ky';

// replace API_BASE_URL with the actual base URL of your authentication API
const API_BASE_URL = 'http://127.0.0.1:8000/api/users';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  email: string;
  username: string;
  password: string;
}

interface AuthResponse {
  access_token: string;
  refresh_token: string;
  user: {
    email: string;
  };
}

export async function loginApi(request: LoginRequest): Promise<AuthResponse> {
  const url = `${API_BASE_URL}/login`;
  const response = await ky.post(url, { json: request }).json<AuthResponse>();
  return response;
}

export async function signupApi(request: SignupRequest): Promise<AuthResponse> {
  const url = `${API_BASE_URL}/register/`;
  const response = await ky.post(url, { json: request }).json<AuthResponse>();
  console.log(response);

  return response;
}
