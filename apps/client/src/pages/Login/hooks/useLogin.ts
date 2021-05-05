import { useMutation, UseMutationOptions } from 'react-query';
import { LoginPayload, LoginResponse } from '../../../types';
import { LoginApi } from '../api';

function useLogin(options: UseMutationOptions<LoginResponse, unknown, LoginPayload, unknown> = {}) {
  return useMutation((payload: LoginPayload) => LoginApi.login(payload), options);
}

export { useLogin };
