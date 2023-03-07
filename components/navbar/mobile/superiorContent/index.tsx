import { CodextLogo } from "@assets/svgs/CodextLogo";
import { Container } from "./styles";

import Drawer from "../components/drawer";
import { ReactElement } from "react";

const SuperiorContent = (): ReactElement => {
    return (
        <Container>
            <CodextLogo width={120} height={35} />
            <Drawer />
        </Container>
    )
}

export { SuperiorContent };