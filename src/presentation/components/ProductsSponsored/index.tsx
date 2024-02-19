import { useNavigate } from "react-router";
import { Card } from "../Card";
import * as S from "./styles";
import { products } from "../../../data/getProducts";
import { Product } from "../../../domain/models/productsModel";
import Slider from "react-slick";
import { useRef } from "react";

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
  const sliderRef = useRef<Slider>(null); // Definindo o tipo de sliderRef como Slider

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <S.Container className={className}>
      <div className="content">
        <div className="w-full">
          {" "}
          <h2 className="pb-4 text-4xl ">Produtos patrocinados</h2>
        </div>
        <div className="container-slick-slider">
          <button className="prev-button" onClick={handlePrev}>
            <img
              src="/products/chevronleft.png"
              alt=""
              style={{ width: "40px" }}
            />
          </button>
          <Slider ref={sliderRef} {...settings} className="slider">
            {listProducts.map((product) => (
              <Card
                onClick={() => handleProductClick(product.id)}
                product={product}
                key={product.id}
              />
            ))}
          </Slider>
          <button className="next-button" onClick={handleNext}>
            <img
              src="/products/chevronright.png"
              alt=""
              style={{ width: "40px" }}
            />
          </button>
        </div>
      </div>
    </S.Container>
  );
};
