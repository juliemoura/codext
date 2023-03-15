import { CardUser } from "@components/cardUser";
import { Tabs } from "@components/tabs";
import { Typography } from "@components/typography";
import { Col } from "antd";
import { CardUserContainer, Container } from "./styles";

const UsersReview = () => {
    return (
        <Container id="testmonials">
            <Typography fontSize="fs550" color="black" textAlign="center">
                Let's see our User's Review
            </Typography>
            <Typography fontSize="fs100" color="gray" textAlign="center" fontFamily="inter">
                With just a few clicks, they can read reviews from other customers who have already tried the product.
            </Typography>
            <Tabs>
                <Tabs.Content value="one">
                    <CardUserContainer>
                        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                            <CardUser description="I think that is a great system and that is such a good idea!" name="Harry Styles" employee="UX/UI Design" src="https://yt3.googleusercontent.com/MjEWybBlBXVZigapX__tR_PyJRx-_OGwEZfWZKyS_jJrlgeeF67h69wN2HOhFohiDA7YNeIG=s900-c-k-c0x00ffffff-no-rj" />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                            <CardUser description="That system can solve problems that i can't imagine." name="Bruno Mars" employee="Software Dev" src="https://yt3.googleusercontent.com/XPo668LLK1KGLTnALT94y3k6H7LXDUagAs0EabPncrgrd2xm-NLBTYVaOgZ8_HtpjPoEcbD0iQ=s900-c-k-c0x00ffffff-no-rj" />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                            <CardUser description="This system help us everyday in every problem." name="Ed Sheeran" employee="Front-End Dev" src="https://akamai.sscdn.co/uploadfile/letras/fotos/9/6/4/0/9640a9aa5c9fd17dd1a3015756725789.jpg" />
                        </Col>
                    </CardUserContainer>
                </Tabs.Content>
                <Tabs.Content value="two">
                    <CardUserContainer>
                        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                            <CardUser description="Thank you for development such a good app!" name="Olivia Rodrigo" employee="UX Developer" src="https://yt3.googleusercontent.com/DIEqRepL0JEro5q3en3lLUyI_vqmot1yghANEaDjANJULzP-2BaewW0XSQX-mzbAgmp4EuODjTA=s900-c-k-c0x00ffffff-no-rj" />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                            <CardUser description="This system help us everyday in every problem." name="Miley Cyrus" employee="Back-End Dev" src="https://yt3.googleusercontent.com/c_zqSYR5xP7lgDO8xZtbQ67MXhOel1cHlSpUTvNgQN-QOEfLcLan6-owiGECb5xE8Qid3zJUxA=s900-c-k-c0x00ffffff-no-rj" />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                            <CardUser description="So thankfull for this app help me everyday." name="Selena Gomez" employee="Software Engineer" src="https://yt3.googleusercontent.com/lwPYJMKoTNR2hs_hrXRFcTy0aQteNHEJnGwyfp0cwvjhJVZW6HWa6CTm_Bf99Y71U2V_FZMZenQ=s900-c-k-c0x00ffffff-no-rj" />
                        </Col>
                    </CardUserContainer>
                </Tabs.Content>
                <Tabs.Content value="three">
                    <CardUserContainer>
                        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                            <CardUser description="Thank you for development such a good app!" name="Taylor Swift" employee="Full-Stack Dev" src="https://yt3.googleusercontent.com/WuQZoHDpLlVIpcIhd9IQo-tkqOXDn_K1oKsXziGOONnLqdLKHLzpkYVys9YybRzn8jmOC_ak=s900-c-k-c0x00ffffff-no-rj" />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                            <CardUser description="This system help us everyday in every problem. Thank u!" name="Conan Gray" employee="Front-End Dev" src="https://yt3.googleusercontent.com/zjWXeb3UFMZKqMU7y4Kiqm-fB9naS2LJ5S67wj1Wwj0qw0OhrK575s5Rn8LRPSmi7iCESD8H95Y=s900-c-k-c0x00ffffff-no-rj" />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                            <CardUser description="So thankfull for this app help me everyday." name="Zayn Malik" employee="Dev Tech Lead" src="https://yt3.googleusercontent.com/ytc/AL5GRJUtPDXtQ_QqLWnsYpL9bKBDzABckpOsLvaZgZxBcA=s900-c-k-c0x00ffffff-no-rj" />
                        </Col>
                    </CardUserContainer>
                </Tabs.Content>
                <Tabs.List>
                    <Tabs.Trigger value="one">1</Tabs.Trigger>
                    <Tabs.Trigger value="two">2</Tabs.Trigger>
                    <Tabs.Trigger value="three">3</Tabs.Trigger>
                </Tabs.List>
            </Tabs>

        </Container>
    )
}

export { UsersReview };