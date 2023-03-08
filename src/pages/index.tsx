import { ThemeProvider } from "styled-components";
import { CodextTheme } from "@themes/CodextTheme";
import { Primary } from "@components/buttons";
import { Typography } from "@components/typography";
import { Navbar } from "@components/navbar";
import { AboutProduct } from "@sections/aboutProduct";
import { Features } from "@sections/features";
import { Accordion } from "@components/accordion";
import { FiChevronDown } from "react-icons/fi";
import { Questions } from "@sections/questions";

export default function Home() {
  return (
    <ThemeProvider theme={CodextTheme}>
      <Navbar />
      <AboutProduct />
      <Features />
      <Questions />
    </ThemeProvider>
  )
}
