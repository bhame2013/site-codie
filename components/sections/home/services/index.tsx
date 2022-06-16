import { Button } from "components/data/button";
import { Service } from "./service-item";

export function ServicesComponent() {
  const dadosDaApi = [
    {
      id: 1,
      image: "/images/banner.jpg",
      title: "criação de sites",
      subTitle: "/ux&ui",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: {
        href: "servicos/criacao-de-sites",
        textIn: "ver mais",
        textOut: "ver mais",
      },
    },
    {
      id: 2,
      image: "/images/banner.jpg",
      title: "Marketing Digital",
      subTitle: "/redes sociais",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: {
        href: "servicos/marketing-digital",
        textIn: "ver mais",
        textOut: "ver mais",
      },
    },
    {
      id: 3,
      image: "/images/banner.jpg",
      title: "identidade visual",
      subTitle: "/design",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: {
        href: "servicos/identidade-visual",
        textIn: "ver mais",
        textOut: "ver mais",
      },
    },
  ];

  return (
    <div>
      {dadosDaApi.map((servico) => {
        return (
          <Service
            key={servico.id}
            image={servico.image}
            title={servico.title}
            subTitle={servico.subTitle}
            paragraph={servico.paragraph}
            link={{
              href: servico.link.href,
              textIn: servico.link.textIn,
              textOut: servico.link.textOut,
            }}
          />
        );
      })}
    </div>
  );
}
