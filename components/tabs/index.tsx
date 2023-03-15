import { IReactChildren } from "interfaces";
import { ReactElement, ReactNode } from "react";
import { TabsList, TabsTrigger, TabsContent } from "./styles";
import { TabsRoot } from "./styles";

interface IProps {
    children: ReactNode | ReactNode[];
    value: string;
};

const Tabs = ({ children }: IReactChildren): ReactElement => (
    <TabsRoot defaultValue="one">
        {children}
    </TabsRoot>
);


const Content = ({ children, value }: IProps) => {
    return <TabsContent value={value}>{children}</TabsContent>;
};
Content.displayName = "Content";
Tabs.Content = Content;


const List = ({ children }: IReactChildren) => {
    return <TabsList>{children}</TabsList>;
};
List.displayName = "List";
Tabs.List = List;

const Trigger = ({ children, value }: IProps) => {
    return <TabsTrigger value={value}>{children}</TabsTrigger>;
};
Trigger.displayName = "Trigger";
Tabs.Trigger = Trigger;

// const Tabs = () => {
//     return (
//         <TabsRoot>
//             <TabsContent value="one">content 1</TabsContent>
//             <TabsContent value="two">content 2</TabsContent>
//             <TabsContent value="three">content 3</TabsContent>
//             <TabsList>
//                 <TabsTrigger value="one">1</TabsTrigger>
//                 <TabsTrigger value="two">2</TabsTrigger>
//                 <TabsTrigger value="three">3</TabsTrigger>
//             </TabsList>
//         </TabsRoot>
//     )
// };

export { Tabs };