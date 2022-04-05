import { useEffect, useState } from "react";

import { LayoutComponent } from "components/layout";

import { api } from "services/api";
import { HomeProps } from "interfaces/pages/home";

import { BannerHome } from 'styles/conteudo/banner'

export default function HomePage() {
  const [response, setResponse] = useState<HomeProps>({});

  useEffect(() => {
    (async () => {
      const { data } = await api.get<HomeProps>("/home");
    })();
  }, []);


  return (
    <LayoutComponent headerType="home">
      <BannerHome>Banner</BannerHome>

      <div id="secaoEspecifca">

      </div>
    </LayoutComponent>
  );
}
