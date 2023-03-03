import Router from "../router/router";
import { ThemeProvider } from "styled-components";
import { defaultthem } from "../style/theme";
import { Globalstyle } from "../style/Globalstyles";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultthem}>
        <Globalstyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
