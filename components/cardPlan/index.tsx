import { Primary } from "@components/buttons";
import { Typography } from "@components/typography";
import { CodextTheme } from "@themes/CodextTheme";
import { ReactElement } from "react";
import { FiCheck } from "react-icons/fi";
import { Container, InformationContainer, InformationsContent, TypographyContainer } from "./styles";

export type CardTypes = {
    bgColor?: keyof typeof CodextTheme.colors;
    hoverColor?: keyof typeof CodextTheme.colors;
    hoverColorCard?: keyof typeof CodextTheme.colors;
    title?: string;
    price?: string;
    user?: string;
    abr?: string;
};

const CardPlan = ({ bgColor = "blue300", hoverColor = "blue200", abr = "mo", hoverColorCard = "purple500", title = "", price = "", user = "" }: CardTypes):ReactElement => {
    return (
        <Container hoverColorCard={hoverColorCard}>
            <TypographyContainer>
                <Typography color="black" fontSize="fs200" fontWeight="medium" textAlign="center">
                    {title}
                </Typography>
            </TypographyContainer>
            <Typography color="black" fontSize="fs450" fontWeight="bold" fontFamily="inter" textAlign="center">
                ${price}/{abr}
            </Typography>
            <InformationsContent>

                <InformationContainer>
                    <FiCheck size={20} color="#5EBD14" />
                    <Typography color="gray" fontSize="fs100" textAlign="center">
                        {user} user license
                    </Typography>
                </InformationContainer>

                <InformationContainer>
                    <FiCheck size={20} color="#5EBD14" />
                    <Typography color="gray" fontSize="fs100" textAlign="center">
                        Support 24/7
                    </Typography>
                </InformationContainer>

                <InformationContainer>
                    <FiCheck size={20} color="#5EBD14" />
                    <Typography color="gray" fontSize="fs100" textAlign="center">
                        Easy Customizable
                    </Typography>
                </InformationContainer>

                <InformationContainer>
                    <FiCheck size={20} color="#5EBD14" />
                    <Typography color="gray" fontSize="fs100" textAlign="center">
                        Commerce license
                    </Typography>
                </InformationContainer>
            </InformationsContent>
            <Primary bgColor={bgColor} hoverColor={hoverColor}>Try this plan</Primary>
        </Container>
    )
};

export { CardPlan };