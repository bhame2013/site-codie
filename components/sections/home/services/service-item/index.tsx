import { Button } from "components/data/button";

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
    <div>
        {title}
      <Button
        href={link.href}
        textIn={link.textIn}
        textOut={link.textOut}
        color="--text-primary-color-light"
      />
    </div>
  );
}
