import { Typography } from "@components/typography";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Container, ImageContent, TextContainer, TextImageContent } from "./styles";
import Image from "next/image";

interface ICardUser {
    description: string;
    name: string;
    employee: string;
    src: string;
}
const CardUser = ({ description, name, employee, src }: ICardUser) => {
    return (
        <Container>
            <TextContainer>
                <RiDoubleQuotesL size={55} color="#A997C6" />
                <Typography color="black" fontFamily="inter" textAlign="center">
                    {description}
                </Typography>
            </TextContainer>
            <ImageContent>
                <Image src={src} alt="Artist" width={60} height={60} />
                <TextImageContent>
                    <Typography color="black" fontFamily="inter" fontWeight="medium">
                        {name}
                    </Typography>
                    <Typography color="gray">
                        {employee}
                    </Typography>
                </TextImageContent>
            </ImageContent>
        </Container>
    )
}

export { CardUser };