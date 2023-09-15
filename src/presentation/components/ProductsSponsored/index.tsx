import { Card } from "../Card";
import * as S from "./styles";
type props = {
  className?: string;
};
export const ProductsSponsored = ({ className }: props) => {
  return (
    <S.Container className={className}>
      <div className="content">
        <div className="w-full">
          <h2 className="pb-4 text-4xl">Produtos patrocinados</h2>
        </div>
        <Card />
      </div>
    </S.Container>
  );
};
