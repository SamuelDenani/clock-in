import AccountMenu from "../AccountMenu";
import Menu from "../Menu";

import { Container } from "./styles";

export default function Navbar() {
  return (
    <Container>
      <Menu />
      <AccountMenu />
    </Container>
  );
}
