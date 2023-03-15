import { ThemeProvider } from "styled-components";
import { CodextTheme } from "@themes/CodextTheme";
import { Navbar } from "@components/navbar";
import { LoginPage } from "@sections/loginPage";

export default function Login() {
  return (
    <ThemeProvider theme={CodextTheme}>
      <LoginPage />
    </ThemeProvider>
  )
}
