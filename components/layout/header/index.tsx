import * as S from "./style";
import { linksMenu } from "./linksMenu";
import Link from "next/link";
import { Container } from "components/data/container";
import { useState } from "react";

export function HeaderComponent() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <S.Header>
        <div className={`top--header ${menu && "active"}`}>
          <div className="block-bar" onClick={() => setMenu(!menu)}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <Link href="/" passHref>
            <a href="replaced" onClick={() => setMenu(false)}>
              <img src="/images/logo-codie.png" alt="logo marca" />
            </a>
          </Link>
        </div>
      </S.Header>

      <a
        href="tel:043996463608"
        className={`phone--header link-2-medium ${menu && "active"}`}
      >
        (43) 99646-3608
      </a>

      <div className={`midias--header  ${menu && "active"}`}>
        <a
          href=""
          target="_blanck"
          rel="external"
          className={`link-1-medium ${menu && "active"}`}
        >
          facebook
        </a>

        <a
          href=""
          target="_blanck"
          rel="external"
          className={`link-1-medium ${menu && "active"}`}
        >
          instagram
        </a>
      </div>

      <div className={`menu--header ${menu && "active"}`}>
        <Container>
          <nav>
            <ul>
              {linksMenu.map((link) => {
                return (
                  <li
                    key={link.href + link.text}
                    onClick={() => setMenu(!menu)}
                  >
                    <Link href={link.href} passHref>
                      <a href="replaced" className="-bold">
                        /{link.text}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Container>
      </div>
    </>
  );
}
