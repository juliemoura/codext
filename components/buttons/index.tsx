import { CodextTheme } from "@themes/CodextTheme";
import { ReactElement, ReactNode } from "react";
import { Container, Title } from "./styles";

export type PrimaryTypes = {
    color?: string;
    bgColor?: keyof typeof CodextTheme.colors;
    width?: string;
    hoverColor?: keyof typeof CodextTheme.colors;
    children: ReactNode | ReactNode[];
    href?: string;
};

const Primary = ({ bgColor = "blue300", color = "white", width = "max-content", hoverColor= "blue200", href = "/", children }: PrimaryTypes): ReactElement => {
    return (
        <Container bgColor={bgColor} width={width} hoverColor={hoverColor}>
            <Title color={color} href={href} target="_blank">
                {children}
            </Title>
        </Container>
    )
};

export { Primary };