import styled, { keyframes } from "styled-components";

const loading = keyframes`
  25% { 
    transform: translateX(42px) rotate(-90deg) scale(0.4);
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.4);
  } 50% { 
    transform: translateX(42px) translateY(42px) rotate(-179deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
  } 50.1% { 
    transform: translateX(42px) translateY(42px) rotate(-180deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
  } 75% { 
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.4);
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.4);
  } 100% { 
    transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
  }
`;

export const Container = styled.div`
  background-color: #590fb7;
  display: grid;
  height: 100%;
  place-items: center;
`;

export const Spinner = styled.div`
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
`;

export const FirstCube = styled.div`
  animation: ${loading} 1.8s infinite ease-in-out;
  background-color: #30be96;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const SecondCube = styled.div`
  animation: ${loading} 1.8s infinite ease-in-out -0.9s;
  background-color: #30be96;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;
