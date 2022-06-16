import * as S from "./styles";

export type TitleProps = {
  subTitle?: {
    size: 2 | 4;
    text: string;
    margin?: number;
  };
  title: {
    size: 1 | 2 | 3;
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

  const marginSubTitle = (Number(subTitle?.margin ? subTitle?.margin : 0) * 100) / 1920;

  return (
    <S.Title
      color={color}
      margin={{
        max: margin,
        min: marginMin,
        variable: marginCalc,
      }}
      marginSubTitle={marginSubTitle}
    >
      {subTitle && (
        <span className={`title-${subTitle.size ? subTitle.size : 2}-regular`}>
          {subTitle.text}
        </span>
      )}

      {isMainTitle ? (
        <h1 className={`title-${title.size ? title.size : 1}-bold`}>
          {title.text}
        </h1>
      ) : (
        <h2 className={`title-${title.size ? title.size : 1}-bold`}>
          {title.text}
        </h2>
      )}
    </S.Title>
  );
}
