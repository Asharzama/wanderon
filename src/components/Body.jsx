import React from "react";
import {
  BodyContainer,
  Blog,
  Image,
  Message,
  Inputs,
  Buttons,
  SliderContainer
} from "./Body.css.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Body = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <BodyContainer>
      <Blog>Blogs</Blog>
      <Image>
        <img
          src="https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25vd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
        />
        <Message>
          <p>
            Let's Take a look as to what the coolest travel community says about
            the upcoming travel trends!
          </p>
          <Inputs>
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </Inputs>
        </Message>
      </Image>
      <SliderContainer>
      <Slider
        {...settings}
        style={{
          borderRadius: '5px',
          backgroundColor: "rgba(242, 247, 246, 255)",
          padding: "1.2rem",
        }}
      >
        <div>
          <Buttons>Trips</Buttons>
        </div>
        <div>
          <Buttons>Food</Buttons>
        </div>
        <div>
          <Buttons>Hotel</Buttons>
        </div>
        <div>
          <Buttons>Places</Buttons>
        </div>
        <div>
          <Buttons>Adventure</Buttons>
        </div>
        <div>
          <Buttons>Workcation</Buttons>
        </div>
        <div>
          <Buttons>More</Buttons>
        </div>
      </Slider>
      </SliderContainer>
    </BodyContainer>
  );
};

export default Body;
