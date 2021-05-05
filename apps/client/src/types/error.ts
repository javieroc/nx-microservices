interface FieldError {
  field: string;
  message: string;
}

export interface ValidationError {
  message: string;
  status: number;
  type: string;
  validations: FieldError[]
}
