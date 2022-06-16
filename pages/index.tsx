import { LayoutComponent } from "components/layout";

import { About } from "components/sections/home/about";
import { Banner } from "components/sections/home/banner";
import { Contact } from "components/sections/home/contact";
import { Portfolio } from "components/sections/home/portfolio";
import { Customers } from "components/sections/home/customers";
import { ServicesComponent } from "components/sections/home/services";

export default function HomePage() {
  return (
    <LayoutComponent>
      <Banner />

      <div id="scroll">
        <ServicesComponent />

        <Portfolio />

        {/* <Customers theme="--secondary-color"/> */}

        <About />

        <Contact />
      </div>
    </LayoutComponent>
  );
}
