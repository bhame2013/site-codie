import { api } from "services/api";
import { useQuery } from "react-query";
import { NextRouter } from "next/router";
import { IBlog } from "interfaces/models/conteudo/blog";

async function GetBlogs(router: NextRouter) {
  if (router) {
    const { data } = await api.get<IBlog>(
      `/blog/list/home${router.asPath.substr(5)}`
    );

    if (data) {
      return data;
    }

    return undefined;
  }
}

export function useBlogs(router: NextRouter) {
  return useQuery([`blogs-list`, router.query], () => GetBlogs(router), {
    staleTime: 1000 * 60 * 30,
  });
}
