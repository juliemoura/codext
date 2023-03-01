import { CodextLogo } from "@assets/svgs/CodextLogo";
import { Primary } from "@components/buttons";
import { Link } from "@components/link";
import { Container, LinkContainer } from "./styles";

const SuperiorContent = () => {
    return (
        <Container>
            <CodextLogo width={120} height={35} />
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