import { Card } from "@components/card";
import { Typography } from "@components/typography";
import { Col } from "antd";
import { CardsContent, Container, TextContainer } from "./styles";

const Features = () => {
    return (
        <Container id="services">
            <TextContainer>
                <Typography fontSize="fs550" color="black" textAlign="center">
                    We provides best feature for costumar
                </Typography>
            </TextContainer>
            <CardsContent>
                <Col xs={24} sm={24} md={5} lg={5} xl={5}>
                    <Card bgColor="pink" icon="Code" title="Clean Code" subtitle=" It is a set of guidelines and principles that help developers write code that is elegant, efficient, and bug-free." />
                </Col>
                <Col xs={24} sm={24} md={5} lg={5} xl={5}>
                    <Card bgColor="brown100" icon="Analytic" title="Data Analytic" subtitle="With the vast amount of data available in today's digital world, has become an increasingly important tool for businesses." />
                </Col>
                <Col xs={24} sm={24} md={5} lg={5} xl={5}>
                    <Card bgColor="blue100" icon="Security" title="Fully Secured" subtitle="Is an approach to security that seeks to protect all aspects of an organization's and assets from all possible threats." />
                </Col>
                <Col xs={24} sm={24} md={5} lg={5} xl={5}>
                    <Card bgColor="purple100" icon="Support" title="24/7 Support" subtitle="Our support refers to customer service and that is available around the clock, 24 hours a day, 7 days a week." />
                </Col>
            </CardsContent>
        </Container>
    )
};

export { Features };