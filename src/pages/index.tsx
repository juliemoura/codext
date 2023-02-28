import { ThemeProvider } from "styled-components";
import { CodextTheme } from "@themes/CodextTheme";
import { Primary } from "@components/buttons";
import { Typography } from "@components/typography";
import { Navbar } from "@components/navbar";
import { Link } from "@components/link";

export default function Home() {
  return (
    <ThemeProvider theme={CodextTheme}>
      <Navbar />
      {/* <Typography fontWeight="regular" fontSize="fs200">Codext Page</Typography>
      <Primary>Try a free trial</Primary> */}

    </ThemeProvider>
  )
}
