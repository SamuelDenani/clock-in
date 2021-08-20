import { useState } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";

import { useAuth } from "../../hooks/useAuth";

import EmployeeMenu from "./Employee";
import CompanyMenu from "./Company";

import {
  Container,
  OpenButton,
  CloseButton,
  Drawer,
  DrawerHeader,
} from "./styles";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  return (
    <Container>
      <OpenButton type="button" onClick={() => setIsOpen(true)}>
        <svg
          width="32"
          height="22"
          viewBox="0 0 32 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="2"
            y1="2"
            x2="30"
            y2="2"
            stroke="#f9f9f9"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <line
            x1="2"
            y1="11"
            x2="30"
            y2="11"
            stroke="#f9f9f9"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <line
            x1="2"
            y1="20"
            x2="30"
            y2="20"
            stroke="#f9f9f9"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </OpenButton>
      <Drawer open={isOpen}>
        <DrawerHeader>
          <CloseButton type="button" onClick={() => setIsOpen(false)}>
            <RiArrowLeftSLine size={40} color="#f9f9f9" />
          </CloseButton>
        </DrawerHeader>

        {user?.type === "employee" ? <EmployeeMenu /> : <CompanyMenu />}
      </Drawer>
    </Container>
  );
}
