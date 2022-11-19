import React, { useState } from "react";
import {
  FeaturesComp,
  BelowSection,
  ImageBelow,
  Header,
  Description,
  Buttons,
  Ending,
} from "./Features.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Features = (props) => {
  const [isReadMore, setReadMore] = useState(false);

  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet repudiandae sint expedita, quod qui libero, nulla labore blanditiis velit ipsa natus, id quia voluptatem. Rerum perspiciatis voluptate veniam harum obcaecati ducimus qui suscipit optio nostrum. Adipisci distinctio illo placeat perspiciatis. Suscipit perferendis omnis facilis quia obcaecati ipsam possimus ut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolores officiis quod neque saepe dignissimos consequuntur quam odit porro pariatur, omnis distinctio dolorum vel quisquam!";

  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <FeaturesComp margin={props.margin}>
      <Slider {...settings}>
        <div>
          <img
            src="https://static.wanderon.in/wp-content/uploads/2022/10/feature-images.jpg"
            alt="image1"
          />
        </div>
        <div>
          <img
            src="https://static.wanderon.in/wp-content/uploads/2019/09/featured-image.jpg"
            alt="image2"
          />
        </div>
        <div>
          <img
            src="https://static.wanderon.in/wp-content/uploads/2022/10/feature-images.jpg"
            alt="image3"
          />
        </div>
        <div>
          <img
            src="https://static.wanderon.in/wp-content/uploads/2019/09/featured-image.jpg"
            alt="image4"
          />
        </div>
        <div>
          <img
            src="https://static.wanderon.in/wp-content/uploads/2020/03/features-image.jpg"
            alt="image5"
          />
        </div>
      </Slider>
      <BelowSection>
        <ImageBelow>
          <span>Places</span>
          <i className="fa-solid fa-share-nodes"></i>
        </ImageBelow>
        <Header>Top 10 Places For A Vivid New Year Celebration In India</Header>
        <Description>
          {isReadMore ? text : `${text.substring(0, 250)}.......`}
          <span onClick={() => setReadMore(!isReadMore)}>
            Read {isReadMore ? "less" : "more"}
          </span>
        </Description>
        <Buttons>
          <button>New Year Celebration</button>
          <button>New Year Celebration</button>
        </Buttons>
        <Ending>
          <p>2022-10-29</p>
          <p>
            <i className="fa-regular fa-eye"></i> 10k Viewers
          </p>
        </Ending>
      </BelowSection>
    </FeaturesComp>
  );
};

export default Features;
