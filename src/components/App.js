import Router from "../router/router";
import { ThemeProvider } from "styled-components";
import { Globalstyle } from "../style/Globalstyles";
import { Reset } from "../style/resetcss";
import {
  defaultthem,
  FlexRow,
  FlexRowBetween,
  FlexSpace,
  FelexCenter,
} from "../style/theme";

function App() {
  const theme = {
    defaultthem,
    FlexRow,
    FlexRowBetween,
    FlexSpace,
    FelexCenter,
  };

  return (
    <>
      <Reset />
      <Globalstyle />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
