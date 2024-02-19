import { useNavigate } from "react-router";
import { Card } from "../Card";
import * as S from "./styles";
import { mostSellerProducts } from "../../../data/getMostSellerProducts";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
type Props = {
  className?: string;
};

export const MostSeller = ({ className }: Props) => {
  const history = useNavigate();

  const handleProductClick = (productId: number) => {
    // Encontra o produto clicado na lista de produtos
    const clickedProduct = mostSellerProducts.find(
      (product) => product.id === productId
    );
    console.log(clickedProduct);

    // Redireciona para a página de compra com o objeto product
    history(`/buyItem/${clickedProduct?.id}`);
  };
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
          <h2 className="pb-4 text-4xl ">Mais Vendidos</h2>
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
            {mostSellerProducts.map((product) => (
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
