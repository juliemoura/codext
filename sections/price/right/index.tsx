import { CardPlan } from "@components/cardPlan";
import { Container } from "../styles";

const Right = () => {
    return (
        <>
            <CardPlan title="Start-up" price="110" abr="year" user="2" bgColor="blue300" hoverColor="blue200" hoverColorCard="blue300"/>
            <CardPlan title="Classic" price="290" abr="year" user="5" bgColor="blue300" hoverColor="blue200" hoverColorCard="blue300" />
            <CardPlan title="Premium" price="570" abr="year" user="10" bgColor="blue300" hoverColor="blue200" hoverColorCard="blue300" />
        </>
    )
}

export { Right };