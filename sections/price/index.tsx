import { CardPlan } from "@components/cardPlan";
import { Switch } from "@components/switch";
import { Typography } from "@components/typography";
import { useState } from "react";
import { ToggleGroup } from "./components/toogleGroup";
import { Left } from "./left";
import { Right } from "./right";
import { Container } from "./styles";

const Price = () => {
    const [id, useId] = useState<number>(1);

    return (
        <Container>
            <Typography fontSize="fs550" color="blue500" textAlign="center" fontWeight="bold">
                Choose your best pricing plan
            </Typography>
            <ToggleGroup />
        </Container>
    )
}

export { Price };