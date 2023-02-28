import { Principal } from "@assets/svgs/Principal";
import { Primary } from "@components/buttons";
import { Typography } from "@components/typography";
import { Container, LeftContainer, RightContainer } from "./styles";

const InferiorContent = () => {
    return (
        <Container>
            <LeftContainer>
                <Typography fontSize="fs600" fontWeight="bold">
                    Codext one of the best system in SAAS.
                </Typography>
                <Typography fontSize="fs100" fontFamily="inter" fontWeight="regular">
                    Codext is a leading SAAS system that has revolutionized the way businesses manage their operations. With its intuitive interface and comprehensive features, Codext has established itself as the best SAAS system in the market.
                </Typography>
                <Primary>Try A Live Demo</Primary>
            </LeftContainer>
            <RightContainer>
                <Principal width={500} height={500} />
            </RightContainer>
        </Container>
    )
}

export { InferiorContent };