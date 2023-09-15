import * as S from "./styles";

export const Input = () => {
  return (
    <S.Container>
      <input
        className="outline-0"
        type="text"
        placeholder="o que você está procurando ?"
      />
      <img src="search.png" alt="" />{" "}
    </S.Container>
  );
};
