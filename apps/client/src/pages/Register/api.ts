import { CreateUserPayload } from '../../types';
import { api } from '../../utils';

async function register(payload: CreateUserPayload): Promise<void> {
  await api.post('/auth/register', payload);
}

export const RegisterApi = {
  register,
};
