import { Principal } from "@assets/svgs/Principal";
import { Primary } from "@components/buttons";
import { Typography } from "@components/typography";
import { ReactElement } from "react";
import { Container, LeftContainer, RightContainer } from "./styles";

const InferiorContent = (): ReactElement => {
    return (
        <Container>
            <LeftContainer xs={24} sm={24} md={24} lg={14} xl={14}>
                <Typography fontSize="fs600" fontWeight="bold">
                    Codext one of the best system in SAAS.
                </Typography>
                <Typography fontSize="fs100" fontFamily="inter" fontWeight="regular" >
                    Codext is a leading SAAS system that has revolutionized the way businesses manage their operations. With its intuitive interface and comprehensive features, Codext has established itself as the best SAAS system in the market.
                </Typography>
                <Primary>Try A Live Demo</Primary>
            </LeftContainer>
            <RightContainer xs={24} sm={24} md={24} lg={10} xl={10}>
                <Principal width={600} height={350} />
            </RightContainer>
        </Container>
    )
}

export { InferiorContent };