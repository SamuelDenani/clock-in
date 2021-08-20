import styled from "styled-components";
import { Link } from "react-router-dom";

import PurpleAndGreenGap from "../../../assets/images/purple-and-green-gap-background.svg";

export const Container = styled.div`
  align-items: center;
  background: url(${PurpleAndGreenGap});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 5rem;
`;

export const Heading = styled.h1`
  color: #30be96;
  font-size: 3rem;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`;

export const Subheading = styled.p`
  color: #f9f9f9;
  font-family: "Prompt", sans-serif;
  font-size: 2rem;
  font-weight: 300;
  margin-top: 1.5rem;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const ActionsContainer = styled.div`
  align-items: center;
  column-gap: 1rem;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

export const ActionButton = styled.button`
  border: 3px solid #30be96;
  border-radius: 1.5rem;
  color: #30be96;
  font-family: "Prompt", sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  height: 3rem;
  overflow: hidden;
  padding: 0 2rem;
  position: relative;
  transition: color 0.25s ease-in, border-color 0.2s ease-out;
  z-index: 1;

  &::before {
    background-color: #30be96;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateX(-100%);
    transition: transform 0.2s ease-in-out;
    width: 100%;
    z-index: -1;
  }

  &:hover {
    border-color: transparent;
    color: #f9f9f9;

    &::before {
      transform: translateX(0);
    }
  }
`;

export const PageLink = styled(Link)`
  border-bottom: 1px solid #f9f9f9;
  color: #f9f9f9;
  margin-top: 1rem;
  text-decoration: none;
`;
