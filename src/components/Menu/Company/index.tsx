import { List, Item, PageLink } from "../styles";

export default function CompanyMenu() {
  return (
    <List>
      <Item>
        <PageLink to="/empresa">funcionários</PageLink>
      </Item>
    </List>
  );
}
