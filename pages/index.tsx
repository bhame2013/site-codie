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

import { IHomeProps } from "interfaces/pages/home";
import { IMarca } from "interfaces/models/catalogo/marca";
import { IBanner } from "interfaces/models/conteudo/banner";
import { IServico } from "interfaces/models/catalogo/servico";
import { IPortfolio } from "interfaces/models/catalogo/portfolio";
import { IDepoimento } from "interfaces/models/conteudo/depoimento";
import { IBlog } from "interfaces/models/conteudo/blog";

export default function HomePage() {
  const [home, setHome] = useState<IHomeProps | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const banner = await api.get<IBanner[]>("component/banners/home");
        setLoadingProgress(15);

        const services = await api.get<IServico>("Servico/list/home");

        setLoadingProgress(33);

        const portfolio = await api.get<IPortfolio[]>(
          "/Component/portfolio/home"
        );

        setLoadingProgress(50);

        const depoimentos = await api.get<IDepoimento[]>(
          "/component/depoimentos/GetAll"
        );

        setLoadingProgress(65);

        const customers = await api.get<IMarca[]>("/Component/marcas/GetAll");

        setLoadingProgress(80);

        const blogs = await api.get<IBlog>("/blog/list/home");

        setHome({
          banner: banner.data,
          services: services.data,
          portfolio: portfolio.data,
          customers: customers.data,
          depoiments: depoimentos.data,
          blogs: blogs.data,
        });

        setLoadingProgress(99);

        setTimeout(() => {
          setLoadingProgress(100);
          setLoading(false);
        }, 3000);
      } catch (e) {
        // setLoading(false);
      }
    })();
  }, []);

  return (
    <LayoutComponent>
      <Loading progress={loadingProgress} />

      {home && (
        <div>
          {home.banner && <Banner banners={home.banner} />}

          {loadingProgress === 100 && (
            <>
              <div id="scroll">
                <ServicesComponent listServices={home.services} />

                <Portfolio listPortfolio={home.portfolio} />

                <Customers listCustomers={home.customers} />

                <Depositions
                  theme="--secondary-color"
                  listDepoiments={home.depoiments}
                />

                <Blog listBlog={home.blogs} />

                <About />

                <Contact />
              </div>
            </>
          )}
        </div>
      )}
    </LayoutComponent>
  );
}
