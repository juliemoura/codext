import { CodextLogo } from "@assets/svgs/CodextLogo";
import { Typography } from "@components/typography";
import { Col } from "antd";
import { Container, Content, DownContent, MediaContainer, MediaContent, UpContent } from "./styles";
import { SlSocialLinkedin, SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { TfiYoutube } from "react-icons/tfi";
import { Link } from "@components/link";
import { Input } from "./components/input";

const Footer = () => {
    return (
        <Container>
            <UpContent>
                <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                    <Content>
                        <CodextLogo width={120} height={35} />
                        <Typography fontSize="fs75" color="gray" fontFamily="inter">
                            Codext is a best system for solve problems about SAAS, and other CSS modules.
                        </Typography>
                        <MediaContainer>
                            <MediaContent>
                                <CiTwitter size={18} color="#FFFF" />
                            </MediaContent>
                            <MediaContent>
                                <SlSocialFacebook size={18} color="#FFFF" />
                            </MediaContent>
                            <MediaContent>
                                <TfiYoutube size={18} color="#FFFF" />
                            </MediaContent>
                            <MediaContent>
                                <SlSocialLinkedin size={18} color="#FFFF" />
                            </MediaContent>
                        </MediaContainer>
                    </Content>
                </Col>
                <Col xs={24} sm={24} md={24} lg={5} xl={5}>
                    <Content>
                        <Typography fontSize="fs200" color="white">
                            Resources
                        </Typography>
                        <Link color="gray" href="#services">
                            Services
                        </Link>
                        <Link color="gray" href="#pricing">
                            Pricing
                        </Link>
                        <Link color="gray" href="#testmonials">
                            Testmonials
                        </Link>
                        <Link color="gray" href="#blog">
                            Blog
                        </Link>
                    </Content>
                </Col>
                <Col xs={24} sm={24} md={24} lg={5} xl={5}>
                    <Content>
                        <Typography fontSize="fs200" color="white">
                            Usefull links
                        </Typography>
                        <Link color="gray" href="/">
                            Terms of services
                        </Link>
                        <Link color="gray" href="/">
                            Privacy Police
                        </Link>
                        <Link color="gray" href="/">
                            Cookie Police
                        </Link>
                        <Link color="gray" href="/">
                            Contact Us
                        </Link>
                    </Content>
                </Col>
                <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                    <Content>
                        <Typography fontSize="fs200" color="white">
                            Newsletter
                        </Typography>
                        <Input />
                    </Content>
                </Col>
            </UpContent>
            <DownContent>
                <Typography fontFamily="inter" color="gray" textAlign="center" fontSize="fs75">Copyright 2021 | Codext All Rights Reserved</Typography>
            </DownContent>
        </Container>
    )
}

export { Footer };