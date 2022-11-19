import styled from "styled-components";
export const AboutUsContainer = styled.div`
display : grid;
grid-template-columns: repeat(4, 1fr);
background-color: rgba(4, 93, 81, 255);
font-size: 4rem;
padding: 2em;
color: white;
ul{
    list-style-type: none;
}
h2{
    font-size: 1em;
    font-weight:500;
    padding: 0.5em 0;
    @media(max-width: 768px){
        text-align: center;
    }
}
p{
    font-size: 0.6em;
    color: rgba(174, 175, 178, 255);
}
li{
    font-size: 1em;
    color: rgba(174, 175, 178, 255);
    @media (max-width: 768px){
        display: none;
    }
}
@media (max-width: 768px){
font-size: 2rem;
grid-template-columns: repeat(3, 1fr);

}
`
export const About = styled.div`
grid-row: 1/ 3;
padding-right: 4rem;
@media (max-width: 768px){
    grid-column: 1/-1;
    text-align: center;
}
`
export const QuickLink = styled.div`
li{
    cursor: pointer;
    color: white;
}
@media (max-width: 768px){
    display:none;
}
`

export const Blog = styled.div`
@media (max-width: 768px){
    display: none;
}
`

export const Address = styled.div`
font-size: 4rem;
text-align: center;
h2{
    color: rgba(4, 93, 81, 255);
    font-size: 1em;
}

h3{
    text-transform: uppercase;
}
p{
    font-size: 0.5em;
    text-transform: capitalize;
}
@media (max-width: 768px){
    font-size: 2rem;
}
`

export const LastLine = styled.div`
margin: 4rem 0;
display:flex;
justify-content: space-around;
text-transform: lowercase;
`