import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

const theme = {
  mobile: "768px",
};
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Nav>
            <GiKnifeFork />
            <Logo to={"/"}>RecipeIt✌</Logo>
          </Nav>
          <Search />
          <Category />
          <Pages />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
  color: black;
`;

const Nav = styled.div`
padding:4rem 0rem
display:flex;
justify-content:flex-start;
align-item:center;
padding:1rem;

svg{
  font-size:2rem
}`;

export default App;
