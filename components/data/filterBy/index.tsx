import { useEffect, useState } from "react";
import { NextRouter } from "next/router";

import * as S from "./styles";

interface CategoriesList {
  id: number;
  metaDescription: string;
  pageTitle: string;
  titulo: string;
  productsCount: number;
  url: string;
}

interface FilterProps {
  listFilters?: CategoriesList[];
  router: NextRouter;
  routerBuild: any;
}

export function FilterBy({
  listFilters,
  router,
  routerBuild
}: FilterProps) {
  const [active, setActive] = useState({
    id: 0,
    active: false,
  });

  function SetParams(categorie: CategoriesList | null) {
    routerBuild.updateRouteParam("category", categorie ? categorie.url : "");
    routerBuild.updateRouteParam("page", 1);

    setActive({
      id: categorie ? categorie.id : 0,
      active: true,
    });
  }

  useEffect(() => {
    if (router.query && listFilters && router.query.category) {
      routerBuild.updateRouteParam("category", router.query.category);
      routerBuild.updateRouteParam("page", 1);

      const filterExist = listFilters.find(
        (filter) => filter.url === router.query.category
      );

      console.log(filterExist)

      if (filterExist) {
        setActive({
          id: filterExist.id,
          active: true,
        });
      }
    }
  }, []);

  if(!listFilters) {
    return <div></div>
  }

  return (
    <S.Filter>
      <h3 className="title-4-bold-graphie">Filtros</h3>

      <button
        className={`paragraph-2-regular-graphie ${
          active.id === 0 ? "active" : ""
        }`}
        type="button"
        onClick={() => SetParams(null)}
      >
        <span className="paragraph-4-bold">Todos</span> <span className="paragraph-4-regular">({listFilters.reduce((a, b) => a + b.productsCount, 0)})</span>
      </button>

      {listFilters?.map((filter) => {
        return (
          <button
            key={filter.id + filter.titulo}
            className={`paragraph-2-regular-graphie  ${
              active.id === filter.id ? "active" : ""
            }`}
            type="button"
            onClick={() => SetParams(filter)}
          >
            <span className="paragraph-4-bold">{filter.titulo}</span> 
            <span className="paragraph-4-regular">({filter.productsCount})</span>
          </button>
        );
      })}
    </S.Filter>
  );
}
