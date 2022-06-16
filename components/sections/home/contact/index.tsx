import { useState, useRef } from "react";

import { Form } from "@unform/web";
import parser from "html-react-parser";
import { FormHandles } from "@unform/core";

import { ContactOptions } from "./contact-options";

import { Button } from "components/data/button";
import { Container } from "components/data/container";
import { Input } from "components/inputs/input";

import * as S from "./styles";
import { Title } from "components/data/title";

interface SubmitForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function Contact() {
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: SubmitForm) {}

  function setOption(option: string) {
    formRef.current?.setFieldValue("subject", option)
  }

  return (
    <S.Contact>
      <Container>
        <div className="box-left">
          <h2 className="title-3-bold">entre em contato</h2>

          <p className="paragraph-2-regular">
            preencha os campos ao lado e entraremos em contato com vocÊ! <br />
            <span className="-bold">a Codie pode te ajudar a</span>
          </p>

          <ul>
            {ContactOptions.map((option) => {
              return (
                <li
                  key={option.value}
                  className="paragraph-1-regular"
                  onClick={() => setOption(option.value)}
                >
                  <img src="/images/check.png" alt="" />

                  <span>{parser(option.label)}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" type="text" placeholder="Nome"/>
          <Input name="email" type="email" placeholder="e-mail"/>
          <Input name="phone" type="text" placeholder="telefone" mask="(099) 9 9999-9999"/>
          <Input name="subject" type="text" placeholder="assunto" />

          <Button
            type="submit"
            textIn="enviar"
            textOut="enviar"
            color="--text-primary-color-dark"
          />
        </Form>
      </Container>
    </S.Contact>
  );
}
