import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const theme = {
  mobile: "768px",
};
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Search />
          <Category />
          <Pages />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
