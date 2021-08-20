import { FormEvent, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FaRegTrashAlt } from "react-icons/fa";

import { useAuth } from "../../../hooks/useAuth";

import { firestore } from "../../../services/firebase";

import Navbar from "../../../components/Navbar";

import {
  Container,
  ContentContainer,
  Form,
  Input,
  Submit,
  Heading,
  Employee,
  EmployeeEmail,
  DeleteEmployee,
} from "./styles";

export default function RegisterEmployee() {
  const [newUserEmail, setNewUserEmail] = useState("");
  const [employees, setEmployees] = useState<any[]>([]);

  const { user: loggedUser, addUnregisteredUser } = useAuth();

  useEffect(() => {
    const companyRef = firestore.doc(`users/${loggedUser?.id}`);
    const usersRef = firestore
      .collection("users")
      .where("company", "==", companyRef);

    const unsubscribe = usersRef.onSnapshot((snapshot) => {
      const employees = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setEmployees(employees);
    });

    return () => {
      unsubscribe();
    };
  }, [loggedUser?.id]);

  const handleRegisterEmployee = async (ev: FormEvent) => {
    ev.preventDefault();

    try {
      await addUnregisteredUser(newUserEmail, loggedUser?.id as string);

      setNewUserEmail("");
      toast.success("Funcionário adicionado com êxito");
    } catch (err) {
      console.error("Error adding new employee", { ...err });

      toast.error("Ocorreu um erro :/");
    }
  };

  const handleDeleteEmployee = async (id: string) => {
    const confirmation = window.confirm(
      "Tem certeza que deseja excluir esse usuário?"
    );

    if (confirmation) {
      const employeeRef = firestore.doc(`users/${id}`);

      try {
        await employeeRef.delete();

        toast.success("Funcionário excluído com êxito");
      } catch (err) {
        console.error("Error deleting employee", { ...err });

        toast.error("Ocorreu um erro :/");
      }
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <ContentContainer>
          <Heading>funcionários</Heading>

          {employees.map(({ id, email }) => (
            <Employee key={id}>
              <EmployeeEmail>{email}</EmployeeEmail>
              <DeleteEmployee onClick={() => handleDeleteEmployee(id)}>
                <FaRegTrashAlt color="#f9f9f9" size={18} />
              </DeleteEmployee>
            </Employee>
          ))}

          <Form onSubmit={handleRegisterEmployee}>
            <Input
              type="email"
              placeholder="email do funcionário"
              value={newUserEmail}
              onChange={(ev) => setNewUserEmail(ev.target.value)}
              required
            />
            <Submit>adicionar funcionário</Submit>
          </Form>
        </ContentContainer>
      </Container>
    </>
  );
}
