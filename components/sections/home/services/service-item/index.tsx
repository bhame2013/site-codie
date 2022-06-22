import { Button } from "components/data/button";
import { Container } from "components/data/container";
import { Title } from "components/data/title";

import { Base } from 'interfaces/models/base'
import * as S from "./styles";

interface ServiceProps {
  service: Base;
}

export function Service({
  service
}: ServiceProps) {
  return (
    <S.ServicesItem>
      <div className="bg" style={{ backgroundImage: `url(${service.imagem ? "https://painel.codie.com.br/uploads/" + service.imagem : "/images/default.jpg"})` }}>
        <Container>
        {service.subtitulo && service.titulo &&  <Title
            subTitle={{
              size: 4,
              text: service.subtitulo,
            }}
            title={{
              size: 2,
              text: service.titulo,
            }}
            color="light"
            margin="45"
          />}

         {service.descricao && <p className="paragraph-3-medium">{service.descricao}</p>}

        { service.url &&   <Button
            href={service.url}
            textIn="saiba mais"
            textOut="saiba mais"
            color="--text-primary-color-light"
          />}
        </Container>
      </div>
    </S.ServicesItem>
  );
}
