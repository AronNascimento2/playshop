import { useNavigate } from "react-router";
import * as S from "./styles";

export const CartItems = () => {
  const history = useNavigate();

  const handleClick = () => {
    // Redireciona para a página de compra com o objeto product
    history(`/`);
  };
  return (
    <S.Container>
      <div className="title">
        <p>Meu carrinho</p>
      </div>
      <div className="item">
        <div className="wrapper-info">
          <img src="products/tv43.png" alt="" style={{ width: "100px" }} />
          <p>
            Smart TV 50" UHD 4K Samsung 50CU7700, Processador Crystal 4K,
            Samsung Gaming Hub, Visual Livre de Cabos, Tela sem limites, Alexa
            built in
          </p>
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
            <p className="price-before">R$2.600,00</p>
            <span className="pix">ou R$2.000.00 </span>
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
              <p className="price">R$4,99</p>
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
              <p>R$2.653,15</p>
            </div>
          </div>
          <div className="items">
            <p>
              <b>Entrega</b>
            </p>
            <div className="items-text">R$4,99</div>
          </div>

          <div className="total">
            <p>Total</p>

            <div className="total-text">
              <p className="price-before">R$2.600,00</p>
              <p className="pix">R$2.000.00 </p>
              <p className="pix-text">no Cartão ou a vista no pix</p>
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
