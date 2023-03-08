import { CodextTheme } from "@themes/index";
import { IReactChildren } from "interfaces";
import React, { ReactElement, ReactNode } from "react";

import {
    AccordionItem,
    AccordionRoot,
    AccordionTrigger,
    AccordionContent,
    AccordionHeader,
} from "./styles";

interface IItem {
    children: ReactNode | ReactNode[];
    value: string;
};

interface ITrigger {
    children: ReactNode | ReactNode[];
    colorOn?: keyof typeof CodextTheme.colors;
    colorOff?: keyof typeof CodextTheme.colors;
};

const Accordion = ({ children }: IReactChildren): ReactElement => (
    <AccordionRoot type="single" collapsible>
        {children}
    </AccordionRoot>
);

const Item = ({ children, value }: IItem) => {
    return <AccordionItem value={value}>{children}</AccordionItem>;
};
Item.displayName = "Item";
Accordion.Item = Item;

const Header = ({ children }: IReactChildren): ReactElement => {
    return <AccordionHeader>{children}</AccordionHeader>;
};
Header.displayName = "Header";
Accordion.Header = Header;

const Trigger = ({ children, colorOn = "purple400", colorOff = "gray"}: ITrigger): ReactElement => {
    return <AccordionTrigger colorOn={colorOn} colorOff={colorOff}>{children}</AccordionTrigger>;
};
Trigger.displayName = "Trigger";
Accordion.Trigger = Trigger;

const Content = ({ children }: IReactChildren): ReactElement => {
    return <AccordionContent>{children}</AccordionContent>;
};
Content.displayName = "Content";
Accordion.Content = Content;

export { Accordion };