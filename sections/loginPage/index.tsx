import { Primary } from "@components/buttons";
import { Typography } from "@components/typography";
import { FcGoogle } from "react-icons/fc";

import { ButtonContent, ButtonsContainer, Container, Content, ForgotContent, IconContent, InputContent } from "./styles";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Input } from "@components/input";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosKey } from "react-icons/io";

const LoginPage = () => {
    return (
        <Container>
            <Primary href="/" bgColor="transparent" hoverColor="transparent">
                <IconContent>
                    <AiOutlineArrowLeft size={20} color="white" />
                    <Typography color="white" textAlign="left">Back</Typography>
                </IconContent>
            </Primary>
            <Content>
                <Typography fontSize="fs200" textAlign="center">Login in to your Account</Typography>
                <Typography fontSize="fs75" textAlign="center" color="gray100" fontFamily="inter">Welcome back! Select method to log in:</Typography>
                <ButtonsContainer>
                    <Primary bgColor="white" hoverColor="purple100" href="https://gmail.com" width="100%">
                        <ButtonContent>
                            <FcGoogle size={25} />
                            <Typography color="black" textAlign="center">Google</Typography>
                        </ButtonContent>
                    </Primary>
                </ButtonsContainer>
                <InputContent>
                    <Input placeholder="E-mail">
                        <MdOutlineMailOutline size={20} color="#DCDCDC" />
                    </Input>
                    <Input placeholder="Senha" type="password">
                        <IoIosKey size={20} color="#DCDCDC" />
                    </Input>
                </InputContent>
                <Primary width="100%" bgColor="purple500" hoverColor="purple400">
                    Log In
                </Primary>
                <ForgotContent>
                    <Primary href="/" bgColor="transparent" hoverColor="transparent">
                        <Typography color="gray" fontSize="fs75" fontFamily="inter">
                            Forgot Password?
                        </Typography>
                    </Primary>
                </ForgotContent>
            </Content>
        </Container>
    )
}

export { LoginPage };