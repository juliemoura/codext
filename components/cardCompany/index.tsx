import { Primary } from "@components/buttons";
import { Typography } from "@components/typography";
import { ReactElement } from "react";
import { Container, ImageContent, TypographyContainer, TypographyContent } from "./styles";

export type CardTypes = {
    src: string;
    hashtag: string;
    data: string;
    title: string;
    subtitle: string;
    href?: string;
};

const CardCompany = ({ src, hashtag, data, title, subtitle, href = "/" }: CardTypes): ReactElement => {
    return (
        <Container>
            <ImageContent src={src} alt="Team" width="950" height="900" />
            <TypographyContent>
                <TypographyContainer>
                    <Typography color="gray" fontSize="fs100" fontFamily="inter" textAlign="left">
                        {hashtag}
                    </Typography>
                    <Typography color="gray" fontSize="fs100" fontFamily="inter" textAlign="left">
                        {data}
                    </Typography>
                </TypographyContainer>
                <Typography color="black" fontSize="fs200" textAlign="left" fontWeight="medium">
                    {title}
                </Typography>
                <Typography color="gray" fontSize="fs100" fontFamily="inter" textAlign="left">
                    {subtitle}
                </Typography>
                <Primary href={href}>
                    Continue
                </Primary>
            </TypographyContent>
        </Container>
    )
};

export { CardCompany };