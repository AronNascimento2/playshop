import { useNavigate } from "react-router";
import { Card } from "../Card";
import * as S from "./styles";
import { mostSellerProducts } from "../../../data/getMostSellerProducts";

type Props = {
  className?: string;
};

export const MostSeller = ({ className }: Props) => {
  const history = useNavigate();

  const handleProductClick = (productId: number) => {
    // Encontra o produto clicado na lista de produtos
    const clickedProduct = mostSellerProducts.find((product) => product.id === productId);
    console.log(clickedProduct);
    
    // Redireciona para a página de compra com o objeto product
    history(`/buyItem/${clickedProduct?.id}`);
  };

  return (
    <S.Container className={className}>
      <div className="content">
        <div className="w-full">
          <h2 className="pb-4 text-4xl ">Mais Vendidos</h2>
        </div>
        <div className="wrapper">
          {mostSellerProducts.map((product) => (
            <Card
              onClick={() => handleProductClick(product.id)}
              product={product}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </S.Container>
  );
};
