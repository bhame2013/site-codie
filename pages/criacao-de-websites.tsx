import { useState, useEffect } from "react";

import { LayoutComponent } from "components/layout";
import { Blog } from "components/sections/home/blog";
import { About } from "components/sections/home/about";
import { Banner } from "components/sections/home/banner";
import { Contact } from "components/sections/home/contact";
import { Portfolio } from "components/sections/home/portfolio";
import { Customers } from "components/sections/home/customers";
import { ServicesComponent } from "components/sections/home/services";

//interfaces
import { IBanner } from "components/sections/home/banner";

import { api } from "services/api";
import { Loading } from "components/data/loading";
import { Depositions } from "components/sections/home/depositions";

export default function HomePage() {
  // const [banner, setBanner] = useState<IBanner[]>([]);
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   (async () => {
  //     const promise1 = api.get<IBanner[]>("/banner/home");
  //     const promise2 = api.get("/portfolio");

  //     Promise.all([promise1, promise2]).then(function (values) {
  //       console.log(values);

  //       setLoading(false)
  //     });
  //   })();
  // }, []);

  // if(loading) {
  //   return <Loading/>
  // }

  return (
    <LayoutComponent>
      <Banner banners={[]} />

      <div id="scroll">
        {/* <InformationService />

        <Differentials />

        <Portfolio />

        <Depositions theme="--secondary-color" />

        <Faq />

        <Operations /> */}

        <Contact />
      </div>
    </LayoutComponent>
  );
}
