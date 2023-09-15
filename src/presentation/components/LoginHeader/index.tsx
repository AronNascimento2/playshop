import * as S from "./styles";

export const LoginHeader = () => {
  return (
    <S.Container className="gap-2">
      <img src="person.png" alt="" />{" "}
      <div className="text">
        <span className="text-white font-bold">Entre ou cadastre-se</span> para
        ver seus pedidos
      </div>
    </S.Container>
  );
};
