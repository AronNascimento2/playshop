import { Swiper, SwiperSlide } from "swiper/react";
import * as S from "./styles";
import { EffectFade } from "swiper/modules";

export const Carrosel = () => {
  const images = [
    {
      id: "1",
      image: "assets/1.png",
      imageres: "assets/1res.png",
    },
    {
      id: "2",
      image: "assets/2.png",
      imageres: "assets/2res.png",
    },
    {
      id: "3",
      image: "assets/3.png",
      imageres: "assets/3res.png",
    },
    {
      id: "4",
      image: "assets/4.png",
      imageres: "assets/4res.png",
    },
    {
      id: "5",
      image: "assets/5.png",
      imageres: "assets/5res.png",
    },
    {
      id: "6",
      image: "assets/6.png",
      imageres: "assets/6res.png",
    },
    {
      id: "7",
      image: "assets/7.png",
      imageres: "assets/7res.png",
    },
    {
      id: "8",
      image: "assets/8.png",
      imageres: "assets/8res.png",
    },
    {
      id: "9",
      image: "assets/9.png",
      imageres: "assets/9res.png",
    },
  ];

  return (
    <S.Container>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 10000 }}
        modules={[EffectFade]}
        effect="fade"
        className="slide-item"
      >
        {images.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="slider" className="slide-item" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </S.Container>
  );
};
