import { useState, useEffect } from "react";

import axios from "axios";
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

import { IHomeProps } from "interfaces/pages/home";
import { IServico } from "interfaces/models/catalogo/servico"
import { IPortfolio } from "interfaces/models/catalogo/portfolio"
import { IMarca } from "interfaces/models/catalogo/marca"

export default function HomePage() {
  const [home, setHome] = useState<IHomeProps>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
    const services =  await api.get<IServico>("Servico/list/home");
    const portfolio =  await api.get<IPortfolio[]>("/Component/portfolio/home");
    const customers =  await api.get<IMarca[]>("/Component/marcas/GetAll");

    setHome({
      services: services.data,
      portfolio: portfolio.data,
      customers: customers.data
     })

     setLoading(false)

    })();
  }, []);

  if(loading) {
    return <Loading/>
  }

  return (
    <LayoutComponent>
      <Banner banners={[]} />

      <div id="scroll">
        <ServicesComponent listServices={home.services}/>

        <Portfolio listPortfolio={home.portfolio} />

        <Customers listCustomers={home.customers}/>

        <Depositions theme="--secondary-color" />

        <Blog />

        <About />

        <Contact />
      </div>
    </LayoutComponent>
  );
}
