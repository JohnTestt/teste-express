import styled from "styled-components"

export const MenuButton = styled.button `
position: fixed;
top: 20px;
left: ${({ isExpanded }) => isExpanded ? "260px" : "65px"}; // Acompanha o drawer
width: 40px;
height: 40px;
border-radius: 50%;
border: none;
background-color: #444;
color: white;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
transition: all 0.3s ease;
z-index: 10;

@media (max-width: 768px) {
    position: sticky;
   left: ${({ isExpanded }) => isExpanded ? "190px" : "0"};
    top: 0;
  };

`

 export const Main = styled.main `

transition: margin-left 0.3s ease-in-out;
margin-left: ${({open}) => (open ? '300px' : '100px')};
border: solid red 1px;

 @media (max-width: 768px) {
    margin-left: 0;
  }
 `