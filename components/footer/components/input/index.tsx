import { useState } from "react";
import { Button, Container, InputText } from "./styles";

const Input = () => {
    const [button, setButton] = useState("Send");
    
    function handleClick () {
        setButton("Success");
    }
    return(
        <Container>
            <InputText placeholder="Email address"/>
            <Button onClick={handleClick}>{button}</Button>
        </Container>
    )
};

export { Input };