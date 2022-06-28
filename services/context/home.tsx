import {
  useEffect,
  useState,
  createContext,
  ReactNode,
  useContext,
} from "react";

import { api } from "services/api";

import { IHomeProps } from "interfaces/pages/home";
import { IMarca } from "interfaces/models/catalogo/marca";
import { IBanner } from "interfaces/models/conteudo/banner";
import { IServico } from "interfaces/models/catalogo/servico";
import { IPortfolio } from "interfaces/models/catalogo/portfolio";
import { IDepoimento } from "interfaces/models/conteudo/depoimento";
import { IBlog } from "interfaces/models/conteudo/blog";

interface ProvidersProps {
  children: ReactNode;
}

const HomeContext = createContext<{home: IHomeProps | undefined, loadingProgress: number} | undefined>(undefined);

function HomeProvider({ children }: ProvidersProps) {
    const [home, setHome] = useState<IHomeProps | undefined>(undefined);
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
        }, 3000);
      } catch (e) {
        // setLoading(false);
      }
    })();
  }, []);

  return (
    <HomeContext.Provider value={{ home: home, loadingProgress }}>{children}</HomeContext.Provider>
  );
}

function useHome() {
  const context = useContext(HomeContext);

  if (context === undefined) {
    throw new Error("useHome() must be used within a HomeProvider");
  }
  return context;
}

export { HomeProvider, useHome };
