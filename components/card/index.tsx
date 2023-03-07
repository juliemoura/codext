import { Typography } from "@components/typography";
import { CodextTheme } from "@themes/CodextTheme";
import { Container, Icon, TypographyContainer } from "./styles";

import { AiFillCode, AiOutlineLineChart } from 'react-icons/ai';
import { MdSecurityUpdateGood, MdSupportAgent } from 'react-icons/md';
import { ReactElement } from "react";


const iconMap = {
    Code: <AiFillCode size={50} color="#B64E4E" />,
    Analytic: <AiOutlineLineChart size={50} color="#9B6717" />,
    Security: <MdSecurityUpdateGood size={50} color="#167E78" />,
    Support: <MdSupportAgent size={50} color="#C231DA" />,
};

export type FeatureTypes = {
    bgColor: keyof typeof CodextTheme.colors;
    icon?: keyof typeof iconMap;
    title?: string;
    subtitle?: string;
}

const Card = ({ bgColor = "green", icon = "Code", title = "", subtitle = "" }: FeatureTypes):ReactElement => {
    const selectedIcon = iconMap[icon] || null;

    return (
        <Container>
            <Icon bgColor={bgColor}>
                {selectedIcon}
            </Icon>
            <TypographyContainer>
                <Typography fontSize="fs200" color="blue500" fontWeight="medium" textAlign="center">
                    {title}
                </Typography>
                <Typography fontFamily="inter" color="gray" textAlign="center">
                    {subtitle}
                </Typography>
            </TypographyContainer>
        </Container>
    )
};

export { Card };