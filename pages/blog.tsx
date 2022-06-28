import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { useBlogs } from "services/blog/get";
import createRouterBuild from "services/utils/router-build";
import Paginate, { IPagination } from "services/utils/pagination";

import { LayoutComponent } from "components/layout";
import { FilterBy } from "components/data/filterBy";
import { Container } from "components/data/container";
import { CardBlog } from "components/sections/blog/cardBlog";
import PaginationComponent from "components/data/pagination";

import * as S from "styles/pages/blog/styles";

export default function BlogPage() {
  const router = useRouter(),
    routerBuild = createRouterBuild(router),
    [search, setSearch] = useState(""),
    [pagination, setPagination] = useState<IPagination | null>(null);

  const blogsResponse = useBlogs(router);

  function Search() {
    routerBuild.updateRouteParam("search", search);
  }

  useEffect(() => {
    if (blogsResponse.data) {
      setPagination(
        Paginate({
          totalItems: blogsResponse.data.pageTotal,
          currentPage:
            Number(router.query.page) <= 0 || !router.query.page
              ? 1
              : Number(router.query.page),
          pageSize: blogsResponse.data.pageSize,
          hasNextPage: blogsResponse.data.hasNextPage,
          hasPreviousPage: blogsResponse.data.hasPreviousPage,
        })
      );
    }
  }, [blogsResponse.data, router.query]);

  return (
    <LayoutComponent>
      <S.Blog>
        <div
          className="bg"
          style={{ backgroundImage: "url(/images/background-blog.jpg)" }}
        >
          <Container>
            <h1 className="title-2-bold">blog</h1>

            <div className="box-right">
              {/* <select className="paragraph-4-regular">
                <option value="">Selecionar categoria</option>
              </select> */}

              <div className="search">
                <input type="text" onChange={(e) => setSearch(e.target.value)} name="search" placeholder="Pesquisa" />

                <button type="button" onClick={Search}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                  >
                    <g>
                      <g>
                        <path d="M8.532 14.727a6.22 6.22 0 0 1-4.427-1.834 6.218 6.218 0 0 1-1.833-4.422A6.2 6.2 0 0 1 4.105 4.05a6.22 6.22 0 0 1 4.427-1.834A6.22 6.22 0 0 1 12.96 4.05a6.218 6.218 0 0 1 1.834 4.421 6.2 6.2 0 0 1-1.834 4.422 6.22 6.22 0 0 1-4.427 1.834zm11.792 4.328l-5.562-5.615A7.97 7.97 0 0 0 8.532.497 7.974 7.974 0 0 0 .56 8.472a7.97 7.97 0 0 0 7.973 7.97 7.946 7.946 0 0 0 5.026-1.782l5.526 5.578a.852.852 0 0 0 .62.266.844.844 0 0 0 .589-.235.862.862 0 0 0 .031-1.213z" />
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </Container>
        </div>

        <Container>
          <div className="blog-content">
            <div className="list">
              <div className="list-content">
                {blogsResponse.data &&
                  blogsResponse.data.posts &&
                  blogsResponse.data.posts.map((blog) => {
                    return <CardBlog key={blog.id} card={blog}/>;
                  })}
              </div>

              {pagination && (
                <PaginationComponent
                  pages={pagination.pages}
                  currentPage={pagination.page}
                  hasNextPage={pagination.hasNextPage}
                  hasPreviousPage={pagination.hasPreviousPage}
                  onSelect={(page) => {
                    return routerBuild.updateRouteParam(
                      "page",
                      page.toString()
                    );
                  }}
                />
              )}
            </div>

            <div className="actions">
              <div className="filter">
                <FilterBy
                  listFilters={[
                    {
                      id: 1,
                      pageTitle: "Home",
                      productsCount: 2,
                      metaDescription: "",
                      titulo: "Home",
                      url: "home",
                    },
                  ]}
                  router={router}
                  routerBuild={routerBuild}
                />
              </div>
            </div>
          </div>
        </Container>
      </S.Blog>
    </LayoutComponent>
  );
}
