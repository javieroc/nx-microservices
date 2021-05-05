import { AxiosError } from "axios";
import { ValidationError } from "../types";

function getErrors(err: unknown): ValidationError {
  const error = err as AxiosError;
  return error.response.data.error;
}

export const MiscUtils = {
  getErrors,
}
