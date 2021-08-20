import { Container, Spinner, FirstCube, SecondCube } from "./styles";

export default function SplashScreen() {
  return (
    <Container>
      <Spinner>
        <FirstCube />
        <SecondCube />
      </Spinner>
    </Container>
  );
}
