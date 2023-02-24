import { ThemeProvider } from "styled-components";
import { CodextTheme } from "@themes/CodextTheme";
import { Button } from "@components/buttons";
import { Typography } from "@components/typography";

export default function Home() {
  return (
    <ThemeProvider theme={CodextTheme}>
      <h1>Codext Page</h1>
    </ThemeProvider>
  )
}
