import { CodextTheme } from "@themes/CodextTheme";
import { ReactElement, ReactNode } from "react";
import { Container, Title } from "./styles";

type LinkTypes = {
    children: ReactNode | ReactNode[];
    href: string;
    color?: keyof typeof CodextTheme.colors;
    hoverColor?: keyof typeof CodextTheme.colors;
}
const Link = ({ children, href, color = "white", hoverColor = "blue300" }: LinkTypes): ReactElement => {
    return (
        <Container href={href} >
            <Title color={color} hoverColor={hoverColor}>
                {children}
            </Title>
        </Container>
    )
};

export { Link };