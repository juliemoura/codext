import { Typography } from "@components/typography";
import { ToggleGroup } from "./components/toogleGroup";
import { Container } from "./styles";

const Price = () => {
    return (
        <Container id="pricing">
            <Typography fontSize="fs550" color="blue500" textAlign="center" fontWeight="bold">
                Choose your best pricing plan
            </Typography>
            <ToggleGroup />
        </Container>
    )
};

export { Price };