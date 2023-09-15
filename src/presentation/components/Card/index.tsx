import { ProductRating } from "../ProductRating";
import * as S from "./styles";

export const Card = () => {
  const products = [
    {
      id: 1,
      img: "products/tv43.png",
      title:
        " Smart TV 43  AOC Full HD 43S5135/78G Roku TV, Dolby Digital Comando de Voz, 60 Hz, Processador Quad Core",
      pricebefore: "R$1.699",
      priceafter: " R$1.499 ou em até 10x de R$ 149,99 sem juros ou",
      pix: "R$1.394,07",
      rating: 4,
    },
    {
      id: 2,
      img: "products/airfryer.png",
      title:
        "Fritadeira Elétrica Sem Óleo Air Fryer Mondial Family AFN40FB 4 L – Preta",
      pricebefore: "R$463,60",
      priceafter: " R$369,99 ou em até 4x de R$ 99,25 sem juros ou",
      pix: "R$369,99",
      rating: 3,
    },
    {
      id: 3,
      img: "products/lg55.png",
      title:
        "Smart TV 55 LG 4K UHD ThinQ AI 55UR8750PSA HDR, Bluetooth, Alexa, Google Assistente, Airplay 2, 3 HDMIs",
      pricebefore: "R$2.999,00",
      priceafter: " R$2.599,00 ou em até 10x de R$ 259,90 sem juros ou",
      pix: "R$2.469,05",
      rating: 5,
    },
    {
      id: 4,
      img: "products/samsungA03.png",
      title:
        "Smartphone Samsung Galaxy A03 Core Preto 32GB, 2GB RAM, Câmera Traseira de 8MP, Selfie de 5MP, Tela Infinita de 6.5 e Processador Octa Core",
      pricebefore: "R$809,00",
      priceafter: " R$665,00 ou em até 6x de R$ 110,83 sem juros ou",
      pix: "R$598,50",
      rating: 4,
    },
    {
      id: 5,
      img: "products/notebook.png",
      title:
        "Notebook Samsung Core i5-1135G7 8GB 256GB SSD Tela Full HD 15.6” Windows 11 Book NP550XDA-KH2BR",
      pricebefore: "R$3.629,90",
      priceafter: " R$3.199,00 ou em até 10x de R$ 319,90 sem juros ou",
      pix: "R$2.879,10",
      rating: 5,
    },
  ];
  return (
    <S.Wrapper className="flex gap-6 items-center justify-center">
      {products.map((product) => {
        return (
          <S.Container
            key={product.id}
            className="w-56 h-93 border-gray border rounded-3xl p-5 mb-4"
          >
            <img src={product.img} alt="" />
            <span className="title">{product.title}</span>
            <span>
              <ProductRating rating={product.rating} />
            </span>
            <div>
              <p className="price-before">{product.pricebefore}</p>
              <p>{product.priceafter}</p>
              <span className="pix">{product.pix}</span>
            </div>
          </S.Container>
        );
      })}
    </S.Wrapper>
  );
};
