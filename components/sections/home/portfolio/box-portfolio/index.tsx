import * as S from "./styles"

interface BoxPortfolioProps {
    title: string;
    image: string;
}

export function BoxPortfolio({ image, title }: BoxPortfolioProps) {
    return (
        <S.BoxPortfolio>
            <div className="shadow"></div>
            <img src={image} alt={title} />

            <h3 className="title-3-bold">{title}</h3>
        </S.BoxPortfolio>
    )
}