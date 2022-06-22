import { useState, useEffect } from "react";

import { LayoutComponent } from "components/layout";
import { Blog } from "components/sections/home/blog";
import { About } from "components/sections/home/about";
import { Banner } from "components/sections/home/banner";
import { Contact } from "components/sections/home/contact";
import { Portfolio } from "components/sections/home/portfolio";
import { Customers } from "components/sections/home/customers";
import { ServicesComponent } from "components/sections/home/services";
import { InformationService } from "components/data/information-service";

//interfaces
import { IBanner } from "components/sections/home/banner";

import { api } from "services/api";
import { Loading } from "components/data/loading";
import { Depositions } from "components/sections/home/depositions";

export default function CriacaoDeWebSitesPage() {
  return (
    <LayoutComponent>
      <Banner banners={[]} />

      <div id="scroll">
        <InformationService
          theme="--secondary-color"
          title={
            "<p>Porque <span>desenvolver</span> seu <span>site</span> com a Codie </p>"
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
