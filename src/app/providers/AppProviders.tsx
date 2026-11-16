
import type { ReactNode } from "react";
import { ThemeProvider } from "./ThemeProvider";

interface Props {
  children: ReactNode;
}

export function AppProviders({ children }: Props) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
