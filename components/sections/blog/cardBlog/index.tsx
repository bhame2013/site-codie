import { NextImage } from "components/data/NextImage";
import { Base } from "interfaces/models/base";
import Link from "next/link";
import parser from "html-react-parser";
import * as S from "./styles";

interface CardBlogProps {
  card: Base;
}

export function CardBlog({ card }: CardBlogProps) {
  return (
    <S.CardBlog>
      {card.url && card.imagem && (
        <Link href={"/blog/" + card.url} passHref>
          <a href="replace" className="image">
            <NextImage src={card.imagem} layout="fill" isBaseUrl />
          </a>
        </Link>
      )}

      <div className="text-card-blog">
        {card.subtitulo && (
          <h4 className="paragraph-4-regular">{card.subtitulo}</h4>
        )}
        {card.titulo && card.url && (
          <Link href={"/blog/" + card.url} passHref>
            <a href="replaced">
              <h3 className="title-4-bold">{card.titulo}</h3>
            </a>
          </Link>
        )}

        {card.descricao && (
          <div className="paragraph-4-regular">{parser(card.descricao)}</div>
        )}

        <a href="" className="read-more paragraph-4-regular">
          leia mais
        </a>
      </div>
    </S.CardBlog>
  );
}
