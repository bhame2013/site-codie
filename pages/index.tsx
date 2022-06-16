import { LayoutComponent } from "components/layout";

import { Banner } from "components/sections/home/banner";
import { ServicesComponent } from "components/sections/home/services";

export default function HomePage() {
  return (
    <LayoutComponent>
      <Banner />

      <div id="scroll">
        <ServicesComponent />
      </div>
    </LayoutComponent>
  );
}
