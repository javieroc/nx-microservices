import { useMutation } from 'react-query';
import { CreateUserPayload } from '../../../types';
import { RegisterApi } from '../api';

function useRegister() {
  return useMutation((payload: CreateUserPayload) => RegisterApi.register(payload));
}

export { useRegister };
