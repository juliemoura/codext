import { ReactElement, ReactNode } from "react";
import { Container, Title } from "./styles";

export type PrimaryTypes = {
    color?: string;
    bgColor?: string;
    width?: string;
    children: ReactNode | ReactNode[];
};

const Primary = ({ bgColor = "blue300", color = "white", width = "max-content", children }: PrimaryTypes): ReactElement => {
    return (
        <Container bgColor={bgColor} width={width}>
            <Title color={color}>
                {children}
            </Title>
        </Container>
    )
};

export { Primary };