import { useState, useEffect } from "react";

import { api } from "services/api";

import { Loading } from "components/data/loading";
import { LayoutComponent } from "components/layout";
import { Blog } from "components/sections/home/blog";
import { About } from "components/sections/home/about";
import { Banner } from "components/sections/home/banner";
import { Contact } from "components/sections/home/contact";
import { Portfolio } from "components/sections/home/portfolio";
import { Customers } from "components/sections/home/customers";
import { Depositions } from "components/sections/home/depositions";
import { ServicesComponent } from "components/sections/home/services";

import { HomeProps } from "interfaces/pages/home";
import { Servico } from "interfaces/models/catalogo/servico"


export default function HomePage() {
  const [home, setHome] = useState<HomeProps | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const servicos = await api.get<Servico>("Servico/list/home");

     setHome({
      services: servicos.data
     })

    })();
  }, []);

  if(home === undefined) {
    return <Loading/>
  }

  return (
    <LayoutComponent>
      <Banner banners={[]} />

      <div id="scroll">
        <ServicesComponent listServices={home.services}/>

        <Portfolio />

        <Customers />

        <Depositions theme="--secondary-color" />

        <Blog />

        <About />

        <Contact />
      </div>
    </LayoutComponent>
  );
}
