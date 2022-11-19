import React from "react";
import { SeeMore, LatestContainer } from "./Features.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Helper from "./Helper";
const Latest = () => {
  const settings = {
    prevArrow: null,
    nextArrow: null,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
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
    <LatestContainer>
      <Slider {...settings} style={{ padding: "5rem" }}>
        <Helper />
        <Helper />
        <Helper />
        <Helper />
        <Helper />
      </Slider>
      <SeeMore>
        <button>See more</button>
      </SeeMore>
    </LatestContainer>
  );
};

export default Latest;
