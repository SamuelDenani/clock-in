import styled from "styled-components";
import { Link } from "react-router-dom";

import Blobs from "../../assets/images/blobs-background.svg";

export const Container = styled.div`
  background: url(${Blobs});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  height: 100%;
  place-items: center;
`;

export const CTA = styled(Link)`
  background-color: rgb(255 255 255 / 0.3);
  backdrop-filter: blur(4px);
  border-radius: 10rem;
  box-shadow: -2px 4px 8px -8px rgb(0 0 0 / 0.2);
  color: #f9f9f9;
  font-family: "Prompt", sans-serif;
  font-size: 4rem;
  padding: 3rem 8rem;
  text-decoration: none;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out 0.1s;

  &:hover {
    box-shadow: -2px 4px 8px 0 rgb(0 0 0 / 0.2);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: inset 1px 2px 6px rgb(0 0 0 / 0.2);
    transform: translateY(1px);
  }

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    padding: 2rem 4rem;
  }
`;
