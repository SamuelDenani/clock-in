import { useState } from "react";
import { useEffect } from "react";

import Navbar from "../../../components/Navbar";

import { useAuth } from "../../../hooks/useAuth";

import { firestore } from "../../../services/firebase";

import {
  Container,
  Heading,
  EmptyMessage,
  RegistersList,
  Register,
  RegisterDate,
  RegisterTime,
  RegisterType,
} from "./styles";

type RegisterData = {
  date: {
    seconds: number;
    nanoseconds: number;
    toDate(): Date;
  };
  type: "start" | "finish";
};

export default function History() {
  const [userRegisters, setUserRegisters] = useState<RegisterData[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const loggedUserRef = firestore.doc(`users/${user?.id}`);

    const registersRef = firestore
      .collection("registers")
      .where("employee", "==", loggedUserRef)
      .orderBy("date", "asc");

    registersRef.onSnapshot((snapshot) => {
      const registers = snapshot.docs.map((register) => ({
        ...register.data(),
      }));

      setUserRegisters(registers as RegisterData[]);
    });
  }, [user?.id]);

  return (
    <>
      <Navbar />
      <Container>
        <Heading>histórico de pontos</Heading>

        {!userRegisters.length ? (
          <EmptyMessage>você ainda não bateu nenhum ponto :(</EmptyMessage>
        ) : (
          <RegistersList>
            {userRegisters.map(({ date, type }) => {
              const registerDate = date.toDate();

              return (
                <Register>
                  <RegisterDate>
                    data:{" "}
                    <strong>{registerDate.toLocaleDateString("pt-BR")}</strong>
                  </RegisterDate>
                  <RegisterTime>
                    horário:{" "}
                    <strong>{registerDate.toLocaleTimeString("pt-BR")}</strong>
                  </RegisterTime>
                  <RegisterType>
                    tipo:{" "}
                    <strong>{type === "start" ? "entrada" : "saída"}</strong>
                  </RegisterType>
                </Register>
              );
            })}
          </RegistersList>
        )}
      </Container>
    </>
  );
}
