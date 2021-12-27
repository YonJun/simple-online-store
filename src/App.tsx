import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes } from "./Routes";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./config";

const THEME = createTheme({
  typography: {
    fontFamily: `'Josefin Sans', sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={THEME}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  </QueryClientProvider>
);
export default App;
