import { Product } from "../../../domain/models/productsModel";
import { ProductRating } from "../ProductRating";
import * as S from "./styles";
type props = {
  onClick?: () => void;
  product?: Product;
};
export const Card = ({ product, onClick }: props) => {
  return (
    <S.Wrapper onClick={onClick}>
      <S.Container
        key={product?.id}
        className="w-56 h-93 border-gray border rounded-3xl p-5 mb-4"
      >
        <img src={product?.img} alt="" />
        <span className="title">{product?.title}</span>
        <span>
          <ProductRating rating={product?.rating} />
        </span>
        <div>
          <p className="price-before">{product?.pricebefore}</p>
          <p>{product?.priceafter}</p>
          <span className="pix">{product?.pix}</span>
        </div>
      </S.Container>
    </S.Wrapper>
  );
};
