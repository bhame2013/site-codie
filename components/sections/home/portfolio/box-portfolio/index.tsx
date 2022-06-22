import { NextImage } from "components/data/NextImage";
import { Configs } from "services/configs";

import * as S from "./styles";

interface BoxPortfolioProps {
  title?: string;
  image?: string;
}

export function BoxPortfolio({ image, title }: BoxPortfolioProps) {
  if(!image) {
    return <> </>
  }

  return (
    <S.BoxPortfolio>
      <div className="shadow"></div>

      <div className="next-image-portfolio">
        <NextImage src={image} alt={title ? title : image} layout="fill" isBaseUrl/>
      </div>

     {title && <h3 className="title-3-bold">{title}</h3>}
    </S.BoxPortfolio>
  );
}
