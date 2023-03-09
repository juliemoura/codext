import { Typography } from "@components/typography";
import { Container, DescriptionContainer } from "./styles";

const Price = () => {
    return (
        <Container>
            <Typography fontSize="fs550" color="black" textAlign="center" fontWeight="bold">
                Choose your best pricing plan
            </Typography>
            <DescriptionContainer>
                <Typography fontSize="fs100" color="black" textAlign="center" fontFamily="inter">
                    Added for
                </Typography>
            </DescriptionContainer>
        </Container>
    )
}

export { Price };