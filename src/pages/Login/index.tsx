import { useState, FormEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";

import {
  Container,
  AuthContainer,
  SideContent,
  Title,
  Subtitle,
  FormContainer,
  Form,
  FormTabContainer,
  FormTab,
  FormHeading,
  Input,
  Checkbox,
  CheckboxFeedback,
  CheckboxLabel,
  Submit,
  UserAction,
} from "./styles";

export default function Login() {
  const [formMode, setFormMode] = useState<"signIn" | "signUp">("signIn");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isCompany, setIsCompany] = useState(false);
  const history = useHistory();
  const {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    resetPassword,
    user,
  } = useAuth();

  useEffect(() => {
    if (user) history.push(user.type === "company" ? "/empresa" : "/pontos");
  }, [history, user]);

  const handleLogin = async (ev: FormEvent) => {
    ev.preventDefault();

    try {
      await signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error("Error login user");

      toast.error("Erro ao entrar :/");
    }
  };

  const handleSignUp = async (ev: FormEvent) => {
    ev.preventDefault();

    if (password === passwordConfirmation) {
      try {
        await createUserWithEmailAndPassword(email, password, name, isCompany);

        history.push(isCompany ? "empresa" : "pontos");
      } catch (err) {
        console.error("Error registering user");

        toast.error("Erro ao criar o usuário :/");
      }
    } else {
      toast.error("⚠️ As senhas não são iguais!", {
        position: "bottom-center",
      });
    }
  };

  const handleResetPassword = async () => {
    if (!email)
      return toast.warning("Preencha o campo de email", {
        position: "bottom-center",
        autoClose: 3000,
      });

    try {
      await resetPassword(email);

      toast.success("Email de recuperação de senha enviado!", {
        position: "bottom-center",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChangeFormMode = (newFormMode: typeof formMode) => {
    setFormMode(newFormMode);

    setEmail("");
    setPassword("");
    setPasswordConfirmation("");
  };

  return (
    <Container>
      <AuthContainer>
        <FormContainer>
          <FormTabContainer>
            <FormTab
              type="button"
              active={formMode === "signIn"}
              onClick={() => handleChangeFormMode("signIn")}
            >
              Entrar
            </FormTab>
            <FormTab
              type="button"
              active={formMode === "signUp"}
              onClick={() => handleChangeFormMode("signUp")}
            >
              Registrar
            </FormTab>
          </FormTabContainer>
          {formMode === "signIn" ? (
            <>
              <FormHeading>já tem conta?</FormHeading>
              <Form onSubmit={handleLogin}>
                <Input
                  autoComplete="email"
                  type="email"
                  placeholder="coloque seu email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  required
                />
                <Input
                  autoComplete="current-password"
                  type="password"
                  placeholder="coloque sua senha"
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                  required
                />
                <Submit type="submit">entrar</Submit>
                <UserAction type="button" onClick={handleResetPassword}>
                  esqueceu a senha?
                </UserAction>
              </Form>
            </>
          ) : (
            <>
              <FormHeading>crie sua conta</FormHeading>
              <Form onSubmit={handleSignUp}>
                <Input
                  autoComplete="username"
                  type="text"
                  placeholder="seu lindo nome"
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                  required
                />
                <Input
                  autoComplete="email"
                  type="email"
                  placeholder="seu melhor email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  required
                />
                <Input
                  autoComplete="current-password"
                  type="password"
                  placeholder="uma senha criativa"
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                  required
                />
                <Input
                  autoComplete="current-password"
                  type="password"
                  placeholder="confirme a senha, por favor"
                  value={passwordConfirmation}
                  onChange={(ev) => setPasswordConfirmation(ev.target.value)}
                  required
                />
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    value="empresa"
                    onChange={(ev) => setIsCompany(ev.target.checked)}
                  />
                  <CheckboxFeedback checked={isCompany} />
                  tenho funcionários
                </CheckboxLabel>
                <Submit type="submit">criar</Submit>
              </Form>
            </>
          )}
        </FormContainer>
      </AuthContainer>

      <SideContent>
        <Title>Clock In</Title>
        <Subtitle>Tá indo trabalhar ou descansar?</Subtitle>
      </SideContent>
    </Container>
  );
}
