import React from "react";
import {
  FooterCont,
  Button,
  Testimonial,
  Reviews,
  Customers,
  Star,
  FeedBack,
} from "./Footer.css";
const Footer = () => {
  return (
    <FooterCont>
      <Button>
        <button>Load more</button>
      </Button>
      <Testimonial>
        <div>Testimonials</div>
        <p>Testimonials</p>
      </Testimonial>
      <Reviews>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
          accusantium beatae ea odio, laudantium numquam aliquam reprehenderit
          aperiam accusamus, ducimus ut nihil reiciendis amet cumque!
        </div>
      </Reviews>
      <Customers>
        <i className="fa-solid fa-face-smile"></i>
        <div>
          <Star>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </Star>
        <p>Ayushi 20 July, 2019</p>
        </div>
      </Customers>
      <FeedBack>
        <p>Get ready for 5-star Experience with us</p>
        <i className="fa-brands fa-google">
        <i className="fa-solid fa-star"> 4.9</i>
          <p>(4902 Reviews)</p>
        </i>
        <i className="fa-solid fa-face-smile">
        <i className="fa-solid fa-star"> 5</i>
        <p>(1312 Reviews)</p>
        </i>
        <i className="fa-brands fa-facebook">
        <i className="fa-solid fa-star"> 4.9</i>
        <p>(645 Reviews)</p>
        </i>
      </FeedBack>
    </FooterCont>
  );
};

export default Footer;
