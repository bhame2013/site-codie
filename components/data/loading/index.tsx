import * as S from "./styles";

interface LoadingProps {
    progress: number
}

export function Loading({ progress }: LoadingProps) {
  return (
    <S.Loading progress={progress}>
      <h3 className="title-2-bold">Olá!</h3>

      <div className="loading">
        <img src="/images/logo-loading.png"  />

        <p className="paragraph-4-bold">CARREGANDO</p>

        <div className="progress-bar">
            <div style={{width: progress + "%"}}></div>
        </div>
      </div>
    </S.Loading>
  );
}
