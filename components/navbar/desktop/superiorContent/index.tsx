import { CodextLogo } from "@assets/svgs/CodextLogo";
import { Primary } from "@components/buttons";
import { Link } from "@components/link";
import { Container, LinkContainer } from "./styles";

const SuperiorContent = () => {
    return (
        <Container>
            <CodextLogo width={120} height={35} />
            <LinkContainer>
                <Link href="#about">About</Link>
                <Link href="#services">Services</Link>
                <Link href="#questions">Questions</Link>
                <Link href="#pricing">Pricing</Link>
                <Link href="#testmonials">Testmonials</Link>
                <Link href="#blog">Blog</Link>  
                <Primary href="/login">Free trial</Primary>
            </LinkContainer>
        </Container>
    )
}

export { SuperiorContent };