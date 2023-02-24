import { CodextTheme } from "@themes/CodextTheme";
import { ReactElement, ReactNode } from "react";
import { Container } from "./styles";

export interface TypographyTypes {
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
    color?: keyof typeof CodextTheme.colors;
    fontFamily?: string;
    textAlign?: string;
    fontSize?: string;
    fontWeight?: string;
}

interface ITypography {
    children: ReactNode;
};

const Typography = ({ tag = "p", color = "green", fontFamily = "ubuntu", textAlign = "left", fontSize = "fs100", fontWeight = "regular", children }: TypographyTypes & ITypography): ReactElement => {
    return (
        <Container tag={tag} color={color} fontFamily={fontFamily} textAlign={textAlign} fontWeight={fontWeight} fontSize={fontSize}>
            {children}
        </Container>
    )
};

export { Typography };