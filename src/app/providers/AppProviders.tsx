
import { ThemeProvider } from "./ThemeProvider";
import { RouterProvider } from "react-router";
import { router } from "@/app/router";

export function AppProviders() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}