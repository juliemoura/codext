import { Card } from "@components/card";
import { Typography } from "@components/typography";
import { CardsContent, Container, TextContainer } from "./styles";

const Features = () => {
    return (
        <Container>
            <TextContainer>
                <Typography fontSize="fs550" color="black" textAlign="center">
                    We provides best feature for costumar
                </Typography>
            </TextContainer>
            <CardsContent>
                <Card bgColor="pink" icon="Code" title="Clean Code" subtitle="Lorem Ipsum dolor sit amet ecle adipiscing etiplsum." />
                <Card bgColor="brown100" icon="Analytic" title="Data Analytic" subtitle="Lorem Ipsum dolor sit amet ecle adipiscing etiplsum." />
                <Card bgColor="blue100" icon="Security" title="Fully Secured" subtitle="Lorem Ipsum dolor sit amet ecle adipiscing etiplsum." />
                <Card bgColor="purple100" icon="Support" title="24/7 Support" subtitle="Lorem Ipsum dolor sit amet ecle adipiscing etiplsum." />
            </CardsContent>
        </Container>
    )
};

export { Features };