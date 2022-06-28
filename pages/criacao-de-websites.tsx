import { GetServerSideProps } from "next";

import { LayoutComponent } from "components/layout";
import { Banner } from "components/sections/home/banner";
import { Contact } from "components/sections/home/contact";
import { InformationService } from "components/data/information-service";

//interfaces

import { api } from "services/api";
import { IBanner } from "interfaces/models/conteudo/banner";

interface CriacaoDeWebSitesProps {
  banner: IBanner[];
}

export default function CriacaoDeWebSitesPage({
  banner,
}: CriacaoDeWebSitesProps) {
    return (
      <LayoutComponent>
        <Banner banners={banner} />
  
        <div id="scroll">
          <InformationService
            theme="--secondary-color"
            title={
              "Porque <span>desenvolver</span> seu <span>site</span> com a Codie"
            }
            image="criacao-de-websites"
            listService={[
              "Para <span>profissionalizar</span> seu negócio e ganhar mais <span>visibilidade na internet</span>;",
              "Para ter mais <span>relevância</span> no Google, <span>conquistar</span> novos cliente e <span>valorizar</span> a sua marca;",
            ]}
          />
  
          {/* <Differentials />
  
          <Portfolio />
  
          <Depositions theme="--secondary-color" />
  
          <Faq />
  
          <Operations />  */}
  
          <Contact />
        </div>
      </LayoutComponent>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const banner = await api.get<IBanner[]>("component/banners/criacao-de-sites");

  console.log(banner.data)

  if (banner.data.length > 0) {
    return {
      props: {
        banner: banner.data,
      },
    };
  }

  return {
    redirect: { destination: "/" },
    props: {},
  };
};
