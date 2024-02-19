import { useNavigate, useParams } from "react-router";
import * as S from "./styles";
import { products } from "../../../data/getProducts";

export const CartItems = () => {
  const { id } = useParams(); // Obtém o id do produto da rota

  const product = products.find((product) => product?.id === parseInt(id!, 10)); // Encontra o produto correspondente na lista

  const history = useNavigate();

  const handleClick = () => {
    // Redireciona para a página de compra com o objeto product
    history(`/`);
  };
  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <S.Container>
      <div className="title">
        <p>Meu carrinho</p>
      </div>
      <div className="item">
        <div className="wrapper-info">
          <img src={product.img} alt="" style={{ width: "100px" }} />
          <p>{product?.title}</p>
        </div>
        <div className="info-buy">
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div>
            <p className="price-before">{product.pricebefore}</p>
            <span className="pix">ou {product.pix} </span>
            <p className="pix-text">a vista no pix</p>
          </div>
        </div>
      </div>
      <div className="wrapper-payment">
        <div className="container-shipment">
          <div>
            <p>Escolha o tipo de entrega na próxima etapa!</p>
          </div>

          <div>
            <span>Entrega calculada para:</span>
          </div>
          <div className="container-location">
            <div className="location">
              <span>
                Rua Francisco Bajarte Jardim Sao Paulo(Zona Leste), São Paulo -
                SP CEP: 08461-270
              </span>
            </div>
            <div>
              <p className="price">Gratís</p>
            </div>
          </div>
        </div>
        <div className="container-payment">
          <div className="resume-container">
            <p>
              <b>Resumo do pedido</b>
            </p>
          </div>

          <div className="items">
            <p>
              <b>Produtos</b>
            </p>
            <div className="items-text">
              <p>{product.pricebefore}</p>
            </div>
          </div>
          <div className="items">
            <p>
              <b>Entrega</b>
            </p>
            <div className="items-text green">Gratís</div>
          </div>

          <div className="total">
            <p>Total</p>

            <div className="total-text">
              <p className="price-before">{product.pricebefore}</p>
              <p className="pix">{product.pix}</p>
              <p className="pix-text">ou a vista no pix</p>
            </div>
          </div>
          <div className="buttons">
            <button onClick={handleClick}>Comprar mais produtos</button>
            <button className="button_peek">Continuar compra</button>
          </div>
        </div>
      </div>
    </S.Container>
  );
};
