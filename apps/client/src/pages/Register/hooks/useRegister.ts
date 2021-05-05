import { useMutation, UseMutationOptions } from 'react-query';
import { CreateUserPayload } from '../../../types';
import { RegisterApi } from '../api';

function useRegister(options: UseMutationOptions<void, unknown, CreateUserPayload, unknown> = {}) {
  return useMutation((payload: CreateUserPayload) => RegisterApi.register(payload), options);
}

export { useRegister };
