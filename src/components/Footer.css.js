import styled from "styled-components";

export const FooterCont = styled.div`
  margin-top: 5rem;
  display: grid;
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  button {
    background-color: rgba(4, 93, 81, 255);
    color: white;
    border: 1.2px solid rgba(4, 93, 81, 255);
    font-size: 1.7rem;
    padding: 1em 4em;
    border-radius: 5px;
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

export const Testimonial = styled.div`
  color: rgba(4, 93, 81, 255);
  margin: 7rem;
  text-align: center;
  position: relative;
  p {
    letter-spacing: 1.4px;
    font-size: 3vw;
    font-weight: 500;
    position: absolute;
    top: 24%;
    right: 42%;
  }
  div {
    letter-spacing: 2px;
    font-size: 6vw;
    font-weight: 500;
    color: #f2f2f2;
  }
`;

export const Reviews = styled.div`
  margin: 0 auto;
  div {
    color: rgba(174, 175, 178, 255);
    background-color: rgba(227, 228, 233, 255);
    font-size: 1.2rem;
    text-align: center;
    width: 30rem;
    border-radius: 50%;
    padding: 3rem 1.5rem;
  }
`;
export const Customers = styled.div`
  margin: 2rem auto;
  display: flex;
  color: rgba(255, 195, 0, 255);
  i {
    font-size: 6rem;
    padding: 1.2rem;
  }
  p {
    color: black;
    font-size: 1rem;
    font-weight: 500;
  }
`;
export const Star = styled.div`
  color: rgba(255, 195, 0, 255);
  i {
    font-size: 2rem;
    padding: 0.3rem;
  }
`;

export const FeedBack = styled.div`
  margin: 5rem auto;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  p {
    grid-column: 1/-1;
    font-size: 3rem;
    letter-spacing: 0.5px;
    color: rgba(4, 93, 81, 255);
    padding: 1em;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      letter-spacing: 0;
    }
  }
  i {
    text-align: center;
    color: rgba(4, 93, 81, 255);
    font-size: 4rem;
    display:grid;
    justify-content: center;
    @media (max-width: 768px){
    font-size: 2.5rem;
    }
  }
  i > i{
    font-size: 1.5rem;
    display: flex;
    color: #252525;
    padding: 0.5em;
    @media (max-width: 768px){
      font-size: 1rem;
    }
  }
  i > p{
    font-size: 1.2rem;
    color: #252525;
    font-weight: 400;
  }
`;
