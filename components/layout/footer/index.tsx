import Link from "next/link";

import { linksMenu } from "../header/linksMenu";
import { Container } from "components/data/container";

import * as S from "./styles";
import { footerNavigation } from "./footer-navigation";

export function FooterComponent() {
  return (
    <S.Footer>
      <Container>
        <div className="flex-footer-itens">
          <div>
            <h3>institucional</h3>

            <ul>
              <li>
                <Link href="/" passHref>
                  <a href="replaced" className="link-3-regular">
                    Home
                  </a>
                </Link>
              </li>

              {linksMenu.map((link) => {
                return (
                  <li key={link.href + link.text}>
                    <Link href={link.href} passHref>
                      <a href="replaced" className="link-3-regular">
                        {link.text}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3>serviços</h3>

            <ul>
              <li>
                <Link href="/sites" passHref>
                  <a href="replaced" className="link-3-regular">
                    sites
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/marketing-digital" passHref>
                  <a href="replaced" className="link-3-regular">
                    marketing digital
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/design" passHref>
                  <a href="replaced" className="link-3-regular">
                    design
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>redes sociais</h3>

            <ul>
              {footerNavigation.redesSociais.map((rede) => {
                return (
                  <li key={"rede-social" + rede.id}>
                    <a href={rede.href} className="link-3-regular">
                      <i>
                        <img src={rede.imagem} />
                      </i>
                      {rede.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3>contato</h3>

            <ul>
              {footerNavigation.contato.map((item) => {
                return (
                  <li key={"rede-social" + item.id}>
                    <a href={item.href} className="link-3-regular">
                      <i>
                        <img src={item.imagem} />
                      </i>
                      <span>{item.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="bottom">
          <div>
            <Link href="/" passHref>
              <a href="replaced" className="link-3-regular">
                POLÍTICAS DE PRIVACIDADE
              </a>
            </Link>

            <Link href="/" passHref>
              <a href="replaced" className="link-3-regular">
                TERMOS DE USO
              </a>
            </Link>
          </div>

          <Link href="/" passHref>
            <a href="replaced" className="logo">
              <img src="/images/logo-codie.png" />
            </a>
          </Link>
        </div>
      </Container>
    </S.Footer>
  );
}
