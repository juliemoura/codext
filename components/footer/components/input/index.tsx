import { Button, Container, InputText } from "./styles";

const Input = () => {
    return(
        <Container>
            <InputText placeholder="Email address"/>
            <Button>Send</Button>
        </Container>
    )
};

export { Input };