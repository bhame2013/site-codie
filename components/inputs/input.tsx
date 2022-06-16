import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

import { useField } from "@unform/core";

import { InputProps } from "./interface";

import * as S from "./styles";


const ReactInputMask = dynamic(() => import("react-input-mask"), {
  ssr: false,
});

export function Input({
  name,
  type = "text",
  mask,
  placeholder
}: InputProps) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current || value,
      path: "value",
    });
  }, [fieldName, value, registerField]);

  return (
    <S.Input>
      <div className="input-content">
        {mask ? (
          <ReactInputMask
            mask={mask}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
          >
            {() => (
              <input
                defaultValue={defaultValue}
                ref={inputRef}
                name={name}
                type={type}
                placeholder={placeholder}
                className="paragraph-4-regular"
              />
            )}
          </ReactInputMask>
        ) : (
          <input
            defaultValue={defaultValue}
            ref={inputRef}
            name={name}
            type={type}
            placeholder={placeholder}
            className="paragraph-4-regular"
          />
        )}
      </div>

      {error && (
        <span className="error paragraph-3-bold-graphie error-message">
          {error}
        </span>
      )}
    </S.Input>
  );
}
