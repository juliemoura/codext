import { Team } from "@assets/svgs/Team";
import { Typography } from "@components/typography";
import { Container, ContentInformation, Icon, LeftContainer, RightContainer, TextContent } from "./styles";

import { TiArrowBack } from 'react-icons/ti';


const AboutProduct = () => {
    return (
        <Container>
            <LeftContainer xs={24} sm={24} md={24} lg={12} xl={12}>
                <Team width={600} height={250} />
            </LeftContainer>
            <RightContainer xs={24} sm={24} md={24} lg={12} xl={12}>
                <Typography fontSize="fs450" color="black" fontWeight="bold">It's helpful for operating system</Typography>
                <ContentInformation>
                    <Icon>
                        <TiArrowBack size={25} color="#EF821E" />
                    </Icon>
                    <TextContent>
                        <Typography fontSize="fs200" color="black" fontWeight="semibold">Ultra fast & secure</Typography>
                        <Typography fontSize="fs100" color="gray" fontFamily="inter">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolore libero praesentium eius.</Typography>
                    </TextContent>
                </ContentInformation>

                <ContentInformation>
                    <Icon>
                        <TiArrowBack size={25} color="#5EBD14" />
                    </Icon>
                    <TextContent>
                        <Typography fontSize="fs200" color="black" fontWeight="semibold">Allows customization</Typography>
                        <Typography fontSize="fs100" color="gray" fontFamily="inter">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolore libero praesentium eius.</Typography>
                    </TextContent>
                </ContentInformation>

                <ContentInformation>
                    <Icon>
                        <TiArrowBack size={25} color="#43B4EE" />
                    </Icon>
                    <TextContent>
                        <Typography fontSize="fs200" color="black" fontWeight="semibold">Smart contract</Typography>
                        <Typography fontSize="fs100" color="gray" fontFamily="inter">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolore libero praesentium eius.</Typography>
                    </TextContent>
                </ContentInformation>
            </RightContainer>
        </Container>
    )
}

export { AboutProduct };