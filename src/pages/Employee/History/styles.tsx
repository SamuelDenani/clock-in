import styled from "styled-components";

import Background from "../../../assets/images/purple-and-green-gap-history-background.svg";

export const Container = styled.div`
  background: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  padding: 4rem 0 2rem;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 2rem 0;
  }
`;

export const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const EmptyMessage = styled.p`
  font-family: "Prompt", sans-serif;
  font-size: 1.5rem;
`;

export const RegistersList = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-height: 70vh;
  overflow: auto;
  row-gap: 1rem;
  width: 50vw;

  &::-webkit-scrollbar {
    width: 10px;
    box-shadow: -1px 0 6px rgb(0 0 0 / 0.1);
  }

  &::-webkit-scrollbar-track {
    background: #590fb7;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #30be96;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #83d8c0;
  }

  @media (max-width: 1024px) {
    width: 90vw;
  }
`;

export const Register = styled.article`
  align-items: center;
  background-color: rgb(255 255 255 / 0.2);
  backdrop-filter: blur(4px);
  border: 1px solid #590fb7;
  border-radius: 8px;
  display: flex;
  flex-shrink: 0;
  justify-content: space-around;
  height: 6rem;
  line-height: 1.5rem;
  max-width: max(45vw, 90%);
  width: 100%;
`;

export const RegisterDate = styled.p``;

export const RegisterTime = styled.p``;

export const RegisterType = styled.p``;
