import GlobalStyle from "./globalsstyle";
import { Intro } from "./pages/Intro";
import { Welcome } from "./pages/Welcome";

function App() {
  return (
    <>
      <GlobalStyle />
      <Welcome />
      {/* <Intro /> */}
    </>
  );
}

export default App;
