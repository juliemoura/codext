import { Primary } from "@components/buttons";
import { Link } from "@components/link";
import { Container, LinkContainer } from "./styles";

const SuperiorContent = () => {
    return (
        <Container>
            <h1>
                Logo
            </h1>
            <LinkContainer>
                <Link href="/">Home</Link>
                <Link href="/">Services</Link>
                <Link href="/">Pricing</Link>
                <Link href="/">Testmonials</Link>
                <Link href="/">Blog</Link>
                <Primary>Free trial</Primary>
            </LinkContainer>
        </Container>
    )
}

export { SuperiorContent };