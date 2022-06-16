import { RefObject } from "react";
import { FormHandles } from "@unform/core";

export function YupValidation(Yup: any, errors: any, formRef: RefObject<FormHandles>) {
  if (errors instanceof Yup.ValidationError) {
    const errorMessages: Record<string, string> = {};

    errors.inner.forEach((error: any) => {
      errorMessages[error.path] = error.message;
    });

    formRef.current?.setErrors(errorMessages);
  }
}
