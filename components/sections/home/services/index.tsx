import { Button } from "components/data/button";
import { Service } from "./service-item";
import { Servico } from "interfaces/models/catalogo/servico"

interface ServicesProps {
  listServices: Servico | undefined;
}

export function ServicesComponent({ listServices }: ServicesProps) {
  if(!listServices) {
      return <div> </div>
  }

  return (
    <div>
      {listServices.items.map((service) => {
        return (
          <Service
            key={service.id + "service"}
            service={service}
          />
        );
      })}
    </div>
  );
}
