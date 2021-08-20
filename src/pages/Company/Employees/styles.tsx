import styled from "styled-components";
import Waves from "../../../assets/images/purple-waves-background.svg";

export const Container = styled.div`
  background-image: url(${Waves});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  padding-top: 6.25rem;

  @media (max-width: 1024px) {
    padding-top: 3rem;
  }
`;

export const ContentContainer = styled.section`
  align-items: center;
  background-color: rgb(255 255 255 / 0.12);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  max-height: 75vh;
  max-width: min(90vw, 57.5rem);
  padding: 3rem 4rem;
  width: 100%;

  @media (max-width: 1024px) {
    padding: 2rem 1rem 1rem;
  }
`;

export const Heading = styled.h1`
  color: #30be96;
  font-size: 2.5rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`;

export const Employee = styled.article`
  align-items: center;
  background-color: #30be96;
  border-radius: 1.75rem;
  box-shadow: 0 2px 3px -1px rgb(0 0 0 / 0.2);
  display: flex;
  height: 3.5rem;
  justify-content: space-between;
  padding: 0 1.5rem;
  width: 100%;

  + article {
    margin-top: 0.5rem;
  }

  @media (max-width: 1024px) {
    padding: 0 0.5rem 0 1rem;
  }
`;

export const EmployeeEmail = styled.p`
  color: #f9f9f9;
  font-family: "Prompt", sans-serif;
  font-size: 1.125rem;
  font-weight: 300;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

export const DeleteEmployee = styled.button`
  background: #590fb7;
  border-radius: 1.5rem;
  display: grid;
  height: 2.5rem;
  place-items: center;
  width: 2.5rem;
`;

export const Form = styled.form`
  border-top: 1px dashed #f9f9f9;
  gap: 0.5rem;
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  background-color: #f9f9f9;
  border-radius: 1.5rem;
  color: #30be96;
  font-weight: 500;
  height: 3rem;
  text-indent: 1.6rem;
  width: 40%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Submit = styled.button`
  background-color: #30be96;
  border-radius: 1.5rem;
  height: 3rem;
  color: #f9f9f9;
  font-weight: 500;
  padding: 0 1rem;
  width: fit-content;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
