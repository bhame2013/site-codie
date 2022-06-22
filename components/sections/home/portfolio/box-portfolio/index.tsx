import { NextImage } from "components/data/NextImage";
import * as S from "./styles";

interface BoxPortfolioProps {
  title: string;
  image: string;
}

export function BoxPortfolio({ image, title }: BoxPortfolioProps) {
  return (
    <S.BoxPortfolio>
      <div className="shadow"></div>

      <div className="next-image-portfolio">
        <NextImage src={image} alt={title} layout="fill" />
      </div>

      <h3 className="title-3-bold">{title}</h3>
    </S.BoxPortfolio>
  );
}
