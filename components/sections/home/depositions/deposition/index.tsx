import * as S from "./styles";

interface CustomerProps {
  description: string;
  title: string;
  profession: string;
  category: string;
}

export function Customer({
  description,
  title,
  profession,
  category,
}: CustomerProps) {
  return (
    <S.Customer>
      <p className="paragraph-3-regular description-customer">
        {description}
      </p>

      <div className="bottom">
        <div>
          <span className="paragraph-1-bold name">{title}</span>
          <span className="paragraph-4-regular profession">{profession}</span>
        </div>

        <span className="paragraph-1-regular category">{category}</span>
      </div>
    </S.Customer>
  );
}
