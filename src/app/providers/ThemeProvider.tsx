
import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6553C7",
      dark: "#5543B6",
      light: "#8B7CF6",
    },
    background: {
      default: "#F8F7F4",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#24232B",
      secondary: "#85818D",
    },
    divider: "#ECEAE5",
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif',
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
});

export function ThemeProvider({ children }: Props) {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}
