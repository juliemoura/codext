import { CardPlan } from "@components/cardPlan";
import { Container } from "../styles";

const Left = () => {
    return (
        <>
            <CardPlan title="Start-up" price="10" user="2" bgColor="purple500" hoverColor="purple100" />
            <CardPlan title="Classic" price="30" user="5" bgColor="purple500" hoverColor="purple100" />
            <CardPlan title="Premium" price="49" user="10" bgColor="purple500" hoverColor="purple100" />
        </>
    )
}

export { Left };