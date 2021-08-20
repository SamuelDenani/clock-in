import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div``;

export const OpenButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;

  svg {
    display: block;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;

  svg {
    display: block;
  }
`;

export const Drawer = styled.div<{ open: boolean }>`
  background-color: #30be96;
  box-shadow: 0rem 0.125rem 0.625rem 0 rgba(0, 0, 0, 0.3);
  height: 100vh;
  left: 0;
  padding: 0 0.5rem;
  position: absolute;
  top: 0;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.25s cubic-bezier(0.42, 1, 0.88, 0.97);
  width: min(25rem, 100vw);
  z-index: 1;
`;

export const DrawerHeader = styled.div`
  align-items: center;
  border-bottom: 0.0625rem solid #f9f9f9;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
`;

export const List = styled.ul`
  align-items: flex-start;
  display: flex;
  flex-direction: column-reverse;
  row-gap: 1rem;
  list-style: none;
`;

export const Item = styled.li`
  line-height: 1.375rem;
`;

export const PageLink = styled(Link)`
  color: #f9f9f9;
  font-family: "Prompt", sans-serif;
  font-size: 1.25rem;
  text-decoration: none;
`;
