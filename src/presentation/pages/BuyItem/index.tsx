import { useNavigate } from "react-router";
import { ProductRating } from "../../components/ProductRating";
import { Container } from "./styles";

export const BuyItem = () => {
  const history = useNavigate();

  const handleProductClick = () => {
    // Redireciona para a página de compra com o objeto product
    history(`/cartItems`);
  };

  return (
    <Container>
      <div>
        <img src="/products/tv43.png" style={{ width: "300px" }} />{" "}
      </div>{" "}
      <div className="wrapper-infos">
        <div className="flex flex-col">
          <ProductRating rating={5} />
          <a href="">Vendido e entregue por Pontofrio</a>
        </div>
        <p className="description">
          Smart TV 50" UHD 4K Samsung 50CU7700, Processador Crystal 4K, Samsung
          Gaming Hub, Visual Livre de Cabos, Tela sem limites, Alexa built in
        </p>
        <div className="info-buy">
          <div>
            <div>
              <p className="price-before">R$2.600,00</p>
              <span className="pix">R$2.000.00</span>
            </div>
          </div>
          <div className="buttons">
            <button onClick={handleProductClick} className="button_buy">
              Comprar
            </button>
            <button className="button_peek">Retira rápido</button>
          </div>
        </div>
        <div className="forms-to-pay">
          <div className="form-to-pay">
            <p> R$ 2.399,00 </p>
            <span>
              ou até <strong>10x de R$ 239,90</strong> sem juros no Cartão de
              Crédito
            </span>
          </div>
          <div className="form-to-pay">
            R$ 2.279,05 - 5% de desconto <span>Exclusivo Pix</span>
          </div>
          <div className="form-to-pay">
            R$ 2.399,00{" "}
            <span>
              à vista no Cartão Ponto ou 12x de R$ 199,92 sem juros. Peça já o
              seu cartão Ponto
            </span>
          </div>
        </div>
        <div>
          <div className="cep">
            <div className="container-text">
              <p>Calcule o frete e prazo de entrega</p>
            </div>
            <div>
              {" "}
              <input type="text" name="" id="" />
              <button>Consultar</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
