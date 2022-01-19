import { Link } from "react-router-dom";
import { Container, Content } from "./style";

export function NavBar() {
  return (
    <Container>
      <Content>
        <p>PokeTest</p>
        <div>
          <Link to="/">Home</Link>
          <Link to="/initials">Initials</Link>
        </div>
      </Content>
    </Container>
  )
}