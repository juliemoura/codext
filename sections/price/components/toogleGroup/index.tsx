import { Left } from "@sections/price/left";
import { Right } from "@sections/price/right";
import React, { useState } from "react";
import { ToggleGroupItem, ToggleGroupRoot, Container, CardContainer } from "./styles";

const ToggleGroup = () => {
    const [sideSelected, setSideSelected] = useState<string>("left");

    return (
        <Container>
            <ToggleGroupRoot
                type="single"
                defaultValue="left"
                aria-label=""
                onValueChange={(sideSelected) => setSideSelected(sideSelected)}
            >
                <ToggleGroupItem aria-label="Left aligned" value="left" onVolumeChange={() => setSideSelected("left")}>
                    Month
                </ToggleGroupItem>
                <ToggleGroupItem aria-label="Right aligned" value="right" onVolumeChange={() => setSideSelected("right")}>
                    Year
                </ToggleGroupItem>
            </ToggleGroupRoot>

            {sideSelected === "left" ?
                <CardContainer>
                    <Left />
                </CardContainer>
                :
                <CardContainer>
                    <Right />
                </CardContainer>
            }

        </Container>
    )
};

export { ToggleGroup };