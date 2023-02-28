import { InferiorContent } from "./inferiorContent";
import { Container } from "./styles";
import { SuperiorContent } from "./superiorContent";

const Navbar = () => {
    return(
        <Container>
            <SuperiorContent />
            <InferiorContent />
        </Container>
    )
}

export { Navbar };