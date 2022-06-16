import * as S from "./styles";

export type TitleProps = {
  subTitle?: {
    size: 2 | 4;
    text: string;
  };
  title: {
    size: 1 | 2;
    text: string;
  };
  color?: "light" | "dark";
  margin: number | "45" | "60" | "100";
  isMainTitle?: boolean;
};

export function Title({
  subTitle,
  title,
  color,
  margin,
  isMainTitle,
}: TitleProps) {
  const marginCalc = (Number(margin) * 100) / 1920;
  const marginMin = Number(margin) * 0.5;

  console.log(marginMin)

  return (
    <S.Title color={color} margin={{
      max: margin,
      min: marginMin,
      variable: marginCalc,
    }}>
      {subTitle && (
        <span className={`title-${subTitle.size ? subTitle.size : 2}-regular`}>
          {subTitle.text}
        </span>
      )}

      <div className={`title-${title.size ? title.size : 1}-bold`}>
        {isMainTitle ? <h1>{title.text}</h1> : <h2>{title.text}</h2>}
      </div>
    </S.Title>
  );
}
