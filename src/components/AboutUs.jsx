import React from "react";
import { About, AboutUsContainer,QuickLink,Blog,Address,LastLine } from "./AboutUs.css";
const AboutUs = () => {
  return (
    <>
    <AboutUsContainer>
      <About>
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          sunt minus distinctio deleniti, voluptates quibusdam quis illo
          quisquam quia ex porro quasi sint amet omnis. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Labore architecto aspernatur velit,
          doloribus pariatur possimus, quas autem dolor, fugiat alias ad sunt
          saepe! Pariatur, asperiores quod.
        </p>
      </About>
      <div>
        <h2>Weekend Trips</h2>
        <ul>
          <li>Bir Billing</li>
          <li>Chopta Tungnath</li>
          <li>Kasol Kheerganga</li>
          <li>Trithan Valley</li>
          <li>Manali Solang</li>
        </ul>
      </div>
      <div>
        <h2>Backpacking Trips</h2>
        <ul>
          <li>Himachal Backpacking</li>
          <li>Spiti Valley Trips</li>
          <li>Ladakh Trips</li>
          <li>Meghalaya Backpacking</li>
          <li>Kashmir Backpacking</li>
        </ul>
      </div>
      <QuickLink>
        <h2>Quick Links</h2>
        <ul>
          <li>Privacy Policy</li>
          <li>Cancellation Policy</li>
          <li>Terms & Condition</li>
          <li>Disclaimer</li>
          <li>About us</li>
        </ul>
      </QuickLink>
      <div>
        <h2>Himalayan Escapades</h2>
        <ul>
          <li>Kasol Manali</li>
          <li>Parvati Valley</li>
          <li>Bir Kasol</li>
          <li>Mcleod Bir tirthan</li>
          <li>Mcleod Bir Barot</li>
        </ul>
      </div>
      <Blog>
        <h2>Blog</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
          optio recusandae quisquam laudantium tempora beatae, explicabo,
          obcaecati culpa quod libero quam. Quae voluptates magni perspiciatis
          vel.
        </p>
      </Blog>
    </AboutUsContainer>
    <Address>
        <h2>Address</h2>
        <h3>wanderon experiences pvt ltd</h3>
        <p>3rd Floor, building no-750, phase V, udyog vihar, sector-19, gurugram, haryana-122022</p>
        <LastLine>
            <h4>hello@wanderon.in</h4>
            <h4>+91-9870301533</h4>
            <h4>www.wanderon.in</h4>
        </LastLine>
    </Address>
    </>
  );
};

export default AboutUs;
