import Parser from "html-react-parser"
import * as S from "./styles";

interface CustomerProps {
  description?: string;
  title?: string;
  profession?: string;
  category?: string;
}

export function Customer({
  description,
  title,
  profession,
  category,
}: CustomerProps) {
  return (
    <S.Customer>
      {description && (
        <div className="paragraph-3-regular description-customer">
          {Parser(description)}
        </div>
      )}

      <div className="bottom">
        <div>
          {title && <span className="paragraph-1-bold name">{title}</span>}
          {profession && <span className="paragraph-4-regular profession">{profession}</span>}
        </div>
      </div>
    </S.Customer>
  );
}
