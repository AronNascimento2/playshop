import React, { useState } from "react";
import InputMask from "react-input-mask";
import { useNavigate, useParams } from "react-router";
import * as S from "./styles";
import { products } from "../../../data/getProducts";
import { searchCep } from "../../../data/getAdress";
import { Endereco } from "../../../domain/models/cepModel";
import { ClipLoader } from "react-spinners";

export const CartItems: React.FC = () => {
  const { id } = useParams();
  const [search, setSearch] = useState("");
  const [cep, setCep] = useState<Endereco | null>(null);
  const [loading, setLoading] = useState(false);
  console.log(cep);
  const product = products.find((product) => product?.id === parseInt(id!, 10));

  const history = useNavigate();

  const handleClick = () => {
    history(`/`);
  };

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
  if (!product) {
    return <div>Produto não encontrado</div>;
  }
  let cepObject: Endereco | null = null; // Defina cepObject inicialmente como null
  const cepFromLocalStorage = localStorage.getItem("cep");
  if (cepFromLocalStorage) {
    cepObject = JSON.parse(cepFromLocalStorage) as Endereco;
    // Agora cepObject tem o objeto recuperado do localStorage
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
            {[1, 2, 3, 4, 5].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <div>
            <p className="price-before">{product.pricebefore}</p>
            <span className="pix">ou {product.pix} </span>
            <p className="pix-text">a vista no pix</p>
          </div>
        </div>
      </div>

      <div className="wrapper-payment">
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
            <ClipLoader color=" #fff" size={50} />
          </div>
        )}
        {cepObject && (
          <div className="container-shipment">
            <div>
              <span>Entrega calculada para:</span>
            </div>
            <div className="container-location">
              <div className="location">
                <span>
                  {cepObject?.logradouro} {cepObject?.bairro},
                  {cepObject?.localidade}-{cepObject?.uf} CEP: {cepObject?.cep}
                </span>
              </div>
              <div>
                <p className="price">R$ 10,00</p>
              </div>
            </div>
          </div>
        )}
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
            <div className="items-text green">R$ 10,00</div>
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
