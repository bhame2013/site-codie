import React, { useEffect, useRef } from "react";

import { useField } from "@unform/core";

import * as S from "./styles";

export function TextAreaComponent({ id, name, label, ...rest }: any) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <S.Input>
      <textarea defaultValue={defaultValue} ref={inputRef} {...rest} className="paragraph-4-regular" />

      {error && <span className="error-message">{error}</span>}
    </S.Input>
  );
}
