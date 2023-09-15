import { Carrosel } from "../../components/Carrosel";
import { Header } from "../../components/Header";
import { MostSeller } from "../../components/MostSeller";
import { MostView } from "../../components/MostView";
import { ProductsSponsored } from "../../components/ProductsSponsored";

import * as S from "./styles";

export const Home = () => {
  return (
    <S.Container>
      <Header />
      <Carrosel />
      <S.Wrapper>
        <MostSeller />
      </S.Wrapper>
      <S.Wrapper>
        <MostView />
      </S.Wrapper>
      <S.Wrapper>
        <ProductsSponsored />
      </S.Wrapper>
    </S.Container>
  );
};
