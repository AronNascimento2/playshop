import { useNavigate, useParams } from "react-router";
import { ProductRating } from "../../components/ProductRating";
import { Container } from "./styles";
import { products } from "../../../data/getProducts";
import { useState } from "react";
import { searchCep } from "../../../data/getAdress";
import { Endereco } from "../../../domain/models/cepModel";
import InputMask from "react-input-mask";
import { ClipLoader } from "react-spinners";

export const BuyItem = () => {
  const [search, setSearch] = useState("");
  const [cep, setCep] = useState<Endereco | null>(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams(); // Obtém o id do produto da rota

  const product = products.find((product) => product?.id === parseInt(id!, 10)); // Encontra o produto correspondente na lista

  const history = useNavigate();

  const handleProductClick = (productId: number) => {
    // Encontra o produto clicado na lista de produtos
    const clickedProduct = products.find((product) => product.id === productId);
    console.log(clickedProduct);

    // Redireciona para a página de compra com o objeto product
    history(`/cartItems/${clickedProduct?.id}`);
  };

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = async () => {
    setLoading(true);

    // Simulando um atraso de 2 segundos
    setTimeout(async () => {
      const result = await searchCep(search);
      setLoading(false);
      setCep(result);
      if (result && result.logradouro) {
        localStorage.setItem(
          "cep",
          JSON.stringify({
            cep: result.cep,
            logradouro: result.logradouro,
            complemento: result.complemento,
            bairro: result.bairro,
            localidade: result.localidade,
            uf: result.uf,
          })
        );
      }
    }, 1000);
  };

  return (
    <Container>
      <div className="container-img">
        <img src={product?.img} alt="produto" style={{ width: "300px" }} />{" "}
      </div>{" "}
      <div className="wrapper-infos">
        <div className="flex flex-col">
          <ProductRating rating={product.rating} />
          <a href="">Vendido e entregue por Pontofrio</a>
        </div>
        <p className="description">{product.title}</p>
        <div className="info-buy">
          <div>
            <div>
              <p className="price-before">{product.pricebefore}</p>
              <span className="pix">{product.pix}</span>
            </div>
          </div>
          <div className="buttons">
            <button
              onClick={() => handleProductClick(product.id)}
              className="button_buy"
            >
              Comprar
            </button>
            <button className="button_peek">Retira rápido</button>
          </div>
        </div>
        <div className="forms-to-pay">
          <div className="form-to-pay">
            <p>{product.priceCard} </p>
            <span>
              ou até <strong>{product.parcel}</strong> sem juros no Cartão de
              Crédito
            </span>
          </div>
          <div className="form-to-pay">
            {product.pix} - {product.pixText} <span>Exclusivo Pix</span>
          </div>
          <div className="form-to-pay last">
            R$ {product.priceCard}{" "}
            <span>
              à vista no Cartão Ponto ou <strong>{product.parcelCard}</strong>{" "}
              sem juros. Peça já o seu cartão Ponto
            </span>
          </div>
        </div>
        <div>
          {!loading ? (
            <div className="cep">
              <div className="container-text">
                <p>Calcule o frete e prazo de entrega</p>
              </div>
              <div>
                {" "}
                <InputMask
                  onChange={onChangeHandler}
                  className="input-cep"
                  type="text"
                  name=""
                  id=""
                  mask="99999-999"
                />
                <button onClick={handleSearch}>Consultar</button>
              </div>
            </div>
          ) : (
            <div className="cep loader">
              <ClipLoader
                color=" #fff"
                size={50}
              />
            </div>
          )}
          {cep && (
            <div className="content-container">
              <p className="cep-text">{cep?.logradouro}</p>
              <div className="items">
                <div>
                  <p>Retira Rápido</p>
                  <p>
                    <b>Retira em 2h</b>
                  </p>
                </div>
                <div className="items-text green">
                  <p>Gratís</p>
                </div>
              </div>
              <div className="items">
                <div>
                  <p>Normal</p>
                  <p>
                    <b>até amanhã</b>
                  </p>
                </div>
                <div className="items-text orange">
                  <p>R$ 10,00</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};
