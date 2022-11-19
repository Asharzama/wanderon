import styled from "styled-components";

export const FeaturesComp = styled.div`
  width: 80%;
  margin: ${props=> props.margin};
  @media (max-width: 768px) {
    margin: auto 5%;
  }
  img {
    width: 100%;
    height: 50vmin;
    border-radius: 5px;
  }
`;

export const Headings = styled.div`
  margin: auto 10%;
  margin-top: 10vmin;
  display: flex;
  align-items: center;
  color: rgba(4, 93, 81, 255);
  font-weight: 700;

  span {
    font-size: 4rem;
    padding: 0 4rem;
    @media (max-width: 768px) {
      font-size: 2rem;
      padding: 0 2rem;
    }
  }

  hr {
    width: 50%;
    height: 3.5px;
    background-color: rgb(100, 0, 0);
  }
`;

export const BelowSection = styled.div`
  @media (max-width: 768px) {
    margin: auto;
  }
`;

export const ImageBelow = styled.div`
  margin: 1rem 2rem;
  font-size: 3rem;
  font-weight: 500;
  color: rgba(4, 93, 81, 255);
  display: flex;
  justify-content: space-between;
`;

export const Header = styled.div`
  font-size: 3.5rem;
  font-weight: 500;
  padding: 3rem 0;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.div`
  font-size: 2rem;
  color: gray;

  span {
    padding-left: 0.5rem;
    font-size: 2rem;
    font-weight: 500;
    color: black;
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const Buttons = styled.div`
  margin-top: 3rem;

  button {
    font-size: 2rem;
    color: rgba(4, 93, 81, 255);
    border: 2px solid rgba(4, 93, 81, 255);
    background-color: white;
    padding: 0 1em;
    border-radius: 15px;
    margin-right: 0.5em;
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

export const Ending = styled.div`
  font-size: 2.5rem;
  margin: 2rem;
  display: flex;
  justify-content: space-between;

  i {
    font-size: 1em;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SeeMore = styled.div`
display: flex;
justify-content: flex-end;
margin: 3rem 10%;
button{
  background-color: white;
  color: rgba(4, 93, 81, 255);
  font-size: 1.7rem;
  padding: 1rem;
  border: 1px solid rgba(4, 93, 81, 255);
  border-radius: 5px;
  cursor: pointer;
}
`

export const HelperImage = styled.img`
width: 100%;
height: 50vmin;
padding: 0 3rem;
`
export const LatestContainer = styled.div`
width: 90%;
margin: auto;
`