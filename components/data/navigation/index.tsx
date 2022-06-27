import * as S from "./styles";

interface NavigationProps {
    theme: "--primary-color" | "--secondary-color" | "--text-primary-color-light";
    left: string;
    right: string;
}

export function Navigation({ theme, left, right }: NavigationProps) {
    return (
        <S.Navigation theme={theme} className="nav">
        <button type="button" className={left}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 46 46"
          >
            <defs>
              <clipPath id="e9zaa">
                <path
                  d="M0 23C0 10.297 10.297 0 23 0s23 10.297 23 23-10.297 23-23 23S0 35.703 0 23z"
                />
              </clipPath>
            </defs>
            <g>
              <g transform="rotate(-180 23 23)">
                <g>
                  <path
                    fill="none"
                    strokeMiterlimit="20"
                    strokeWidth="4"
                    d="M0 23C0 10.297 10.297 0 23 0s23 10.297 23 23-10.297 23-23 23S0 35.703 0 23z"
                    clipPath='url("#e9zaa")'
                  />
                </g>
                <g transform="rotate(45 21.5 22.5)">
                  <path
                    fill="none"
                    strokeMiterlimit="20"
                    strokeWidth="2"
                    d="M11.767 15.944v0H26.16v14.392"
                  />
                </g>
              </g>
            </g>
          </svg>
        </button>

        <button type="button" className={right}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 46 46"
          >
            <defs>
              <clipPath id="hmrsa">
                <path
                  d="M0 23C0 10.297 10.297 0 23 0s23 10.297 23 23-10.297 23-23 23S0 35.703 0 23z"
                />
              </clipPath>
            </defs>
            <g>
              <g>
                <g>
                  <path
                    fill="none"
                    strokeMiterlimit="20"
                    strokeWidth="4"
                    d="M0 23C0 10.297 10.297 0 23 0s23 10.297 23 23-10.297 23-23 23S0 35.703 0 23z"
                    clipPath='url("#hmrsa")'
                  />
                </g>
                <g transform="rotate(45 24.5 23.5)">
                  <path
                    fill="none"
                    strokeMiterlimit="20"
                    strokeWidth="2"
                    d="M11.767 15.944v0H26.16v14.392"
                  />
                </g>
              </g>
            </g>
          </svg>
        </button>
      </S.Navigation>
    )
}