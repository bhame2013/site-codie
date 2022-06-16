import { Button } from "components/data/button";
import { Container } from "components/data/container";
import { Title } from "components/data/title";

interface ServiceProps {
  image: string;
  title: string;
  subTitle: string;
  paragraph: string;
  link: {
    href: string;
    textIn: string;
    textOut: string;
  };
}

//TODO NESTE ARQUIVO AQUI QUE VOCE IRÁ ESTILIZAR

export function Service({
  image,
  title,
  subTitle,
  paragraph,
  link,
}: ServiceProps) {
  return (
    <div style={{ backgroundImage: `url(${image})` }}>
      <Container>
        <Title
          subTitle={{
            size: 4,
            text: subTitle,
          }}
          title={{
            size: 2,
            text: title,
          }}
          color="light"
          margin="45"
          isMainTitle
        />

        <Button
          href={link.href}
          textIn={link.textIn}
          textOut={link.textOut}
          color="--text-primary-color-light"
        />

      </Container>
    </div>
  );
}
