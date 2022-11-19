import React, { useState } from 'react'
import {
    HelperImage,
    BelowSection,
    ImageBelow,
    Header,
    Description,
    Buttons,
    Ending,
  } from "./Features.css";
const Helper = () => {
    const [isReadMore, setReadMore] = useState(false);

    const text =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet repudiandae sint expedita, quod qui libero, nulla labore blanditiis velit ipsa natus, id quia voluptatem. Rerum perspiciatis voluptate veniam harum obcaecati ducimus qui suscipit optio nostrum. Adipisci distinctio illo placeat perspiciatis. Suscipit perferendis omnis facilis quia obcaecati ipsam possimus ut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolores officiis quod neque saepe dignissimos consequuntur quam odit porro pariatur, omnis distinctio dolorum vel quisquam!";
  return (
    <div style={{ textAlign: "center"}}>
    <HelperImage src="https://static.wanderon.in/wp-content/uploads/2022/10/featured-images-1.jpg" alt="	Famous Food of Meghalaya" />
  <BelowSection>
    <ImageBelow>
      <span>Places</span>
      <i className="fa-solid fa-share-nodes"></i>
    </ImageBelow>
    <Header>
      Top 10 Places For A Vivid New Year Celebration In India
    </Header>
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
  </div>
  )
}

export default Helper