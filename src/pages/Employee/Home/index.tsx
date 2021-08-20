import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useAuth } from "../../../hooks/useAuth";

import { firestore } from "../../../services/firebase";

import Navbar from "../../../components/Navbar";

import {
  Container,
  Heading,
  ActionsContainer,
  ActionButton,
  PageLink,
  Subheading,
} from "./styles";

export default function Home() {
  const [userInfos, setUserInfos] = useState<any>({});
  const { user } = useAuth();

  useEffect(() => {
    const userRef = firestore.doc(`users/${user?.id}`);

    const unsubscribe = userRef.onSnapshot((infos) =>
      setUserInfos(infos.data())
    );

    return () => {
      unsubscribe();
    };
  }, [user]);

  const handleAddRecord = async (type: "start" | "finish") => {
    try {
      const loggedUserRef = firestore.doc(`users/${user?.id}`);

      await firestore.collection("registers").add({
        date: new Date(),
        employee: loggedUserRef,
        type,
      });

      toast.success("Ponto batido!");
    } catch (err) {
      console.error("Error adding new register", { ...err });

      toast.error("Ocorreu um erro ao bater o ponto :/");
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Heading>tá indo trabalhar ou descansar?</Heading>
        {userInfos?.lastRegisterType && (
          <Subheading>
            seu último ponto foi de{" "}
            <strong>
              {userInfos.lastRegisterType === "finish" ? "saída" : "entrada"}
            </strong>
          </Subheading>
        )}

        <ActionsContainer>
          <ActionButton type="button" onClick={() => handleAddRecord("start")}>
            trabalhar
          </ActionButton>
          <ActionButton type="button" onClick={() => handleAddRecord("finish")}>
            descansar
          </ActionButton>
        </ActionsContainer>

        <PageLink to="/pontos/historico">ver histórico</PageLink>
      </Container>
    </>
  );
}
