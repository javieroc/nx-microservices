import { LoginPayload, LoginResponse } from '../../types';
import { api } from '../../utils';

async function login(payload: LoginPayload): Promise<LoginResponse> {
  const { data } = await api.post('/auth/login', payload);
  return data;
}

export const LoginApi = {
  login,
};
