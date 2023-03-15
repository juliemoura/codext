import { ThemeProvider } from "styled-components";
import { CodextTheme } from "@themes/CodextTheme";

export default function Login() {
  return (
    <ThemeProvider theme={CodextTheme}>
      <h1>Login</h1>
    </ThemeProvider>
  )
}
