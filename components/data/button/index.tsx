import Link from "next/link";
import * as S from "./styles";

interface ButtonProps {
  href?: string;
  textIn: string;
  textOut: string;
  color?:
    | "--primary-color"
    | "--secondary-color"
    | "--text-primary-color-dark"
    | "--text-primary-color-light" 
}

export function Button({ href, textIn, textOut, color }: ButtonProps) {
  return (
    <S.Button color={color}>
      {href ? (
        <Link href={href}>
          <a href="replaced" className="paragraph-3-bold">
            <span className="textIn">{textIn}</span>
            <span className="textOut">{textOut}</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <defs>
                <clipPath id="nax1a">
                  <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16z" />
                </clipPath>
              </defs>
              <g>
                <g>
                  <g>
                    <path
                      fill="none"
                      strokeMiterlimit="20"
                      strokeWidth="4"
                      d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16z"
                      clipPath='url("#nax1a")'
                    />
                  </g>
                  <g transform="rotate(45 17 16)">
                    <path
                      fill="none"
                      strokeMiterlimit="20"
                      strokeWidth="2"
                      d="M10.213 12.08v0h7.84v7.84"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </Link>
      ) : (
        <button className="paragraph-3-bold">{textIn}</button>
      )}
    </S.Button>
  );
}
