import React, { useEffect, useRef } from "react";

import { useField } from "@unform/core";

import { InputProps } from "./interface";

import * as S from "./styles";

export function TextArea({ name, placeholder }: InputProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null);
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
      <textarea
        defaultValue={defaultValue}
        ref={inputRef}
        placeholder={placeholder}
        className="paragraph-4-regular"
      />

      {error && <span className="error-message">{error}</span>}
    </S.Input>
  );
}
