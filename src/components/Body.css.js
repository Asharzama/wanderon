import styled from "styled-components";

export const BodyContainer = styled.div`
  background-color: rgba(4, 93, 81, 255);
  width: 100%;
`

export const Blog = styled.div`
  color: white;
  font-size: 3rem;
  text-align: center;
  padding: 2rem 0;
`

export const Image = styled.div`
  width: 80%;
  margin: 2vh auto;
  position: relative;
  img {
    width: 100%;
    height: 30vmin;
    border-radius: 5px;
  }
`


export const Message = styled.div`
  font-size: 5vmin;
  letter-spacing: 2px;
  font-weight: 500;
  margin: 0 10%;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 30%;

@media (max-width: 768px) {
    letter-spacing: normal;
  }
`

export const Inputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6.5vmin;
font-size:2rem;
height: 3em;

  input {
    font-size: 2rem;
    width: 70%;
    padding: 1em;
    outline: none;
    border: 1.3px solid rgba(4, 93, 81, 255);
    border-radius: 5px;
    box-shadow: 3px 3px 12px 5px rgba(0, 0, 0, 0.443);
@media (max-width: 768px) {
    font-size: 1.2rem;
}
  }

  button {
    padding: 2em 4em;
    color: white;
    background-color: rgba(4, 93, 81, 255);
    outline: none;
    border: 1px solid rgba(4, 93, 81, 255);
    position: absolute;
    right: 15%;
    border-radius: 5px;
@media (max-width: 768px) {
    display: none;
}

  }
  &::placeholder {
    color: rgba(4, 93, 81, 255);
  }
`



export const Buttons = styled.div`

    font-size: 1.7rem;
    padding: 1.3em 2vw;
    text-align: center;
    color: rgba(4, 93, 81, 255);
    background-color: white;
    border: 1.5px solid rgba(4, 93, 81, 255);
    border-radius: 7px;
    margin: 0 2vw;

    &:hover {
        color: white;
        background-color: rgba(4, 93, 81, 255);
      }
      @media (max-width: 768px) {
        font-size: 1rem;
        padding: 0.5em 0;
        border-radius: 20px;
        margin: 0.5em 0.2em;
      }
`
export const SliderContainer = styled.div`
margin: 0 auto;
margin-top:9vh;
width:80%;
`
