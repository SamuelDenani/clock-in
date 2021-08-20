import { useState } from "react";
import { CgProfile } from "react-icons/cg";

import { useHistory } from "react-router";
import { useAuth } from "../../hooks/useAuth";

import {
  Container,
  ProfileButton,
  Drawer,
  DrawerHeader,
  DrawerHeading,
  MenuButton,
} from "./styles";

export default function AccountMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (err) {
      console.error('Error signing out', {err})
    }

    history.push("/login");
  };

  return (
    <Container>
      <ProfileButton type="button" onClick={() => setIsOpen((prev) => !prev)}>
        <CgProfile size={20} color="#30be96" />
      </ProfileButton>

      <Drawer open={isOpen}>
        <DrawerHeader>
          <DrawerHeading>{user?.name || "opções"}</DrawerHeading>
        </DrawerHeader>
        <MenuButton type="button" onClick={handleSignOut}>
          sair da conta
        </MenuButton>
      </Drawer>
    </Container>
  );
}
