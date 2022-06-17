import { useState, useRef } from "react";
import { useRouter } from "next/router";

import { Form } from "@unform/web";
import parser from "html-react-parser";
import { FormHandles } from "@unform/core";

import { YupValidation } from "services/yup-validation";
import { ContactOptions } from "./contact-options";

import { Title } from "components/data/title";
import { Button } from "components/data/button";
import { Input } from "components/inputs/input";
import { Container } from "components/data/container";
import { TextArea } from "components/inputs/textarea";

import * as S from "./styles";

interface SubmitForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const formRef = useRef<FormHandles>(null);

  function setOption(option: string) {
    formRef.current?.setFieldValue("subject", option);
  }

  async function HandleSubmit(data: SubmitForm) {
    const Yup = await import("yup");

    try {
      setLoading(true);
      setError("");

      const schema = Yup.object().shape({
        email: Yup.string()
          .email("Please enter a valid email")
          .required("Please enter a email"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.setErrors({});
    } catch (err: any) {
      setLoading(false);

      const yupError = err instanceof Yup.ValidationError;

      if (err && !yupError) {
        setError(err);
        return;
      }

      YupValidation(Yup, err, formRef);
    }
  }

  return (
    <S.Contact>
      <Container>
        <div className="box-left">
          <Title
            title={{
              size: 3,
              text: "entre em contato",
            }}
            color="dark"
            margin={20}
          />

          <p className="paragraph-4-regular description-contact">
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

                  <span className="item-list-contact">{parser(option.label)}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <Form ref={formRef} onSubmit={HandleSubmit}>
          <Input name="name" type="text" placeholder="Nome" />
          <Input name="email" type="email" placeholder="E-mail" />
          <Input
            name="phone"
            type="text"
            placeholder="Telefone"
            mask="(099) 9 9999-9999"
          />
          <Input name="subject" type="text" placeholder="Assunto" />

          <TextArea name="message" placeholder="Mensagem" />

          <div className="actions">
            <div></div>

            <Button
              type="submit"
              textIn="enviar"
              textOut="enviar"
              color="--text-primary-color-dark"
            />
          </div>
        </Form>
      </Container>
    </S.Contact>
  );
}
