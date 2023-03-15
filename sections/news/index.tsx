import { CardCompany } from "@components/cardCompany";
import { Typography } from "@components/typography";
import { Col } from "antd";
import { CardsContainer, Container } from "./styles";

const News = () => {
    return (
        <Container id="blog">
            <Typography fontSize="fs550" color="black" textAlign="center" fontWeight="medium">
                Latest insights news
            </Typography>
            <CardsContainer>
                <Col xs={24} sm={24} md={9} lg={8} xl={8}>
                    <CardCompany src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?cs=srgb&dl=pexels-fox-1595385.jpg&fm=jpg" hashtag="Our creative Team" data="17 June, 2022" title="Running remote offsites and new onboardings" subtitle="Running remote offsites and onboardings can be challenging, but with the right preparation and execution, they can be just as effective as in-person events." href="https://pitch.com/blog/running-remote-offsites-and-onboardings" />
                </Col>
                <Col xs={24} sm={24} md={9} lg={8} xl={8}>
                    <CardCompany src="https://media.istockphoto.com/id/1322842973/photo/diverse-business-people-putting-their-hands-together-in-cirle.jpg?s=612x612&w=0&k=20&c=9BAYCv8tAsgYPQdTsFxLzLJsmt6tGYE5Etwd63OccxQ=" hashtag="Create presentations" data="20 July, 2022" title="A new look and new ways to new collaborate" subtitle="Running remote offsites and onboardings can be challenging, but with the right preparation and execution, they can be just as effective as in-person events." href="https://www.forbes.com/sites/googlecloud/2021/05/18/4-ways-collaboration-has-fundamentally-changed/" />
                </Col>
            </CardsContainer>
        </Container>
    )
};

export { News };