import { IReactChildren } from "interfaces";
import { ReactElement } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { Container, InputContent } from "./styles";

type InputTypes = {
    placeholder: string;
    type?: "text" | "password";
};

const Input = ({ children, placeholder, type = "text" }: InputTypes & IReactChildren): ReactElement => {
    return (
        <Container>
            {children}
            <InputContent placeholder={placeholder} type={type} />
        </Container>
    )
}

export { Input };