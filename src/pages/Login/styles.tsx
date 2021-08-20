import styled, { css } from "styled-components";

import PurpleAndGreenWaves from "../../assets/images/purple-and-green-waves-background.svg";
import MobilePurpleAndGreenWaves from "../../assets/images/mobile-layered-waves-background.svg";

export const Container = styled.div`
  display: flex;
  height: 100%;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

export const AuthContainer = styled.main`
  align-items: center;
  background-color: #590fb7;
  background: url(${PurpleAndGreenWaves});
  background-position: 84%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-end;
  width: 60%;
  position: relative;

  @media (max-width: 1024px) {
    background: url(${MobilePurpleAndGreenWaves});
    height: -webkit-fill-available;
    justify-content: flex-start;
    padding: 5rem 0 0;
    width: 100%;
  }
`;

export const SideContent = styled.aside`
  background-color: #590fb7;
  color: #30be96;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 3.75rem 30vh;
  width: 40%;

  @media (max-width: 1024px) {
    padding: 4rem 2rem;
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
`;

export const Subtitle = styled.h2`
  color: #f9f9f9;
  font-family: "Prompt", sans-serif;
  font-size: 1.75rem;
  font-weight: 500;
`;

export const FormContainer = styled.div`
  align-items: center;
  background-color: rgb(48 190 150 / 0.4);
  backdrop-filter: blur(4px);
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30vh;
  max-width: 70%;
  padding: 2rem 0;
  position: relative;
  width: 100%;

  @media (max-width: 1024px) {
    margin: 0;
    max-width: 90%;
  }
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 25rem;
  padding: 0 8px;
  width: 100%;
`;

export const FormTabContainer = styled.div`
  display: flex;
  column-gap: 0.5rem;
  left: 14px;
  position: absolute;
  top: 0;
  transform: translateY(-100%);
`;

export const FormTab = styled.button<{ active: boolean }>`
  color: #f9f9f9;
  font-family: "Prompt", sans-serif;
  font-size: 1.125rem;
  padding: 0.5rem;
  position: relative;
  transition: all 0.2s ease-in-out;

  &::after {
    border-radius: 2px 2px 0 0;
    bottom: 0;
    content: "";
    height: 3px;
    left: 0;
    position: absolute;
    transition: all 0.2s ease-in-out;
    width: 100%;
  }

  ${({ active }) =>
    active
      ? css`
          font-weight: 500;

          &::after {
            background-color: rgb(48 190 150 / 0.4);
            backdrop-filter: blur(4px);
          }
        `
      : css`
          font-weight: 300;

          &::after {
            background-color: transparent;
          }
        `}
`;

export const FormHeading = styled.span`
  color: #f9f9f9;
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1.25rem;
`;

export const Input = styled.input`
  background-color: #f9f9f9;
  border: 0;
  border-radius: 1.5rem;
  display: block;
  font-family: "Prompt", sans-serif;
  height: 3rem;
  margin: 0 auto;
  outline: 0;
  text-indent: 1.6rem;
  width: 100%;

  + input {
    margin-top: 0.75rem;
  }

  &::placeholder {
    color: inherit;
    font-weight: 300;
  }
`;

export const Checkbox = styled.input`
  display: none;
`;

export const CheckboxFeedback = styled.span<{ checked: boolean }>`
  border-radius: 2px;
  display: inline-block;
  height: 0.75rem;
  margin-right: 0.5rem;
  position: relative;
  transition: all 0.12s ease;
  width: 0.75rem;

  ${({ checked }) =>
    checked
      ? css`
          background: #590fb7;

          &::after {
            content: "";
            background-color: #30be96;
            border-radius: 2px;
            height: 4px;
            position: absolute;
            inset: 4px;
            width: 4px;
          }
        `
      : css`
          background: #fff;
        `}
`;

export const CheckboxLabel = styled.label`
  color: #f9f9f9;
  cursor: pointer;
  margin: 0.75rem 0 0 1.6rem;
  user-select: none;
`;

export const Submit = styled.button<{ secondary?: boolean }>`
  border-radius: 1.5rem;
  cursor: pointer;
  font-family: "Prompt", sans-serif;
  font-weight: 500;
  height: 3rem;
  max-width: 15rem;
  width: 100%;

  ${({ secondary }) =>
    secondary
      ? css`
          background-color: transparent;
          border: 2px solid #590fb7;
          color: #590fb7;
          font-size: 0.875rem;
          margin-top: 0.75rem;
        `
      : css`
          background-color: #590fb7;
          border: 0;
          box-shadow: 0 3px 5px rgb(249 249 249 / 0.3);
          color: #f9f9f9;
          margin-top: 1rem;
        `}
`;

export const UserAction = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  color: #f9f9f9;
  margin-top: 0.75rem;
`;
