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

import { useHome } from "services/context/home";

export default function HomePage() {
  const { home, loadingProgress } = useHome();

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
