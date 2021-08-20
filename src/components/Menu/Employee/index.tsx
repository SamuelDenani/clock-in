import { List, Item, PageLink } from "../styles";

export default function EmployeeMenu() {
  return (
    <List>
      <Item>
        <PageLink to="/pontos">bater ponto</PageLink>
      </Item>

      <Item>
        <PageLink to="/pontos/historico">histórico de pontos</PageLink>
      </Item>
    </List>
  );
}
