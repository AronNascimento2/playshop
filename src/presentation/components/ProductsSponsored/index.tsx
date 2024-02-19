import { useNavigate } from "react-router";
import { Card } from "../Card";
import * as S from "./styles";
import { products } from "../../../data/getProducts";
import { Product } from "../../../domain/models/productsModel";

type props = {
  className?: string;
};
export const ProductsSponsored = ({ className }: props) => {
  const history = useNavigate();

  const handleProductClick = (productId: number) => {
    // Encontra o produto clicado na lista de produtos
    const clickedProduct = products.find((product) => product.id === productId);
    console.log(clickedProduct);

    // Redireciona para a página de compra com o objeto product
    history(`/buyItem/${clickedProduct?.id}`);
  };
  const listProducts: Product[] = products;

  return (
    <S.Container className={className}>
      <div className="content">
        <div className="w-full">
          {" "}
          <h2 className="pb-4 text-4xl ">Produtos patrocinados</h2>
        </div>
        <div className="wrapper">
          {listProducts.map((product) => {
            return (
              <Card
                onClick={() => handleProductClick(product.id)}
                product={product}
                key={product.id}
              />
            );
          })}
        </div>
      </div>
    </S.Container>
  );
};
