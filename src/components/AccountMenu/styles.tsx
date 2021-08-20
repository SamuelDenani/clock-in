import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const ProfileButton = styled.button`
  background-color: #f9f9f9;
  border: 0;
  border-radius: 20px;
  cursor: pointer;
  display: grid;
  height: 36px;
  place-items: center;
  width: 36px;
`;

export const Drawer = styled.div<{ open: boolean }>`
  background: #30be96;
  border-radius: 4px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  color: #f9f9f9;
  padding: 12px 16px;
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  transition: all 0.2s ease-in-out;
  width: max-content;

  ${({ open }) => {
    return open
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `;
  }}
`;

export const DrawerHeader = styled.div`
  border-bottom: 2px solid #f9f9f9;
  margin-bottom: 12px;
`;

export const DrawerHeading = styled.span`
  color: #f9f9f9;
  font-family: "Prompt", sans-serif;
  font-size: 16px;
  line-height: 24px;
`;

export const MenuButton = styled.button`
  background: none;
  border: 0;
  color: #f9f9f9;
  cursor: pointer;
  font-family: "Prompt", sans-serif;
  font-size: 14px;
  font-weight: 300;
`;
