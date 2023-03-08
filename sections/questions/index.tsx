import { Accordion } from "@components/accordion";
import { Typography } from "@components/typography";
import { FiChevronDown } from "react-icons/fi";
import { RightContainer, Container, LeftContainer } from "./styles";

const Questions = () => {
    return (
        <Container>
            <LeftContainer xs={24} sm={24} md={11} lg={11} xl={11}>
                <Typography fontSize="fs550" color="black" textAlign="center">
                    What our clients should know
                </Typography>
            </LeftContainer>

            <RightContainer xs={24} sm={24} md={12} lg={12} xl={12}>
                <Accordion>
                    <Accordion.Item value="one">
                        <Accordion.Header>
                            <Accordion.Trigger>
                                <Typography color="gray100">Time to delivery my products?</Typography>
                                <FiChevronDown size={25} />
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content> The delivery time varies depending on the product and the delivery location. Usually, the delivery time is provided at the time of purchase.</Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item value="two">
                        <Accordion.Header>
                            <Accordion.Trigger>
                                <Typography color="gray100">How do I track my order?</Typography>
                                <FiChevronDown size={25} />
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content>You can track your order using the tracking number sent by email after the purchase confirmation. If you have any questions, our customer service team is available to assist you.</Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item value="three">
                        <Accordion.Header>
                            <Accordion.Trigger>
                                <Typography color="gray100">Is it possible to cancel an order?</Typography>
                                <FiChevronDown size={25} />
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content>Yes, it is possible to cancel an order after purchase confirmation, as long as the product has not been shipped yet. To cancel an order, please contact our customer service team as soon as possible.</Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item value="four">
                        <Accordion.Header>
                            <Accordion.Trigger>
                                <Typography color="gray100">What is the exchange policy?</Typography>
                                <FiChevronDown size={25} />
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content> Our exchange and return policy allows you to return or exchange products within 7 days of receipt, provided the product is in perfect condition and in its original packaging.</Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item value="five">
                        <Accordion.Header>
                            <Accordion.Trigger>
                                <Typography color="gray100">About the technical support?</Typography>
                                <FiChevronDown size={25} />
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content>To request technical support, please contact our customer service team by phone, email, or chat. Our team is available to assist you with any questions or problems related to the product.</Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item value="six">
                        <Accordion.Header>
                            <Accordion.Trigger>
                                <Typography color="gray100">What is the payment process?</Typography>
                                <FiChevronDown size={25} />
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content>The payment process is made through a secure and encrypted system, which guarantees the protection of your data. We accept various forms of payment, such as credit card, bank slip, and bank transfer.</Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item value="seven">
                        <Accordion.Header>
                            <Accordion.Trigger>
                                <Typography color="gray100">How do I contact the company?</Typography>
                                <FiChevronDown size={25} />
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content>You can contact us through the contact form on our website, by email, phone, or chat. Our customer service team is available to assist you with any questions or problems.</Accordion.Content>
                    </Accordion.Item>
                </Accordion>
            </RightContainer>
        </Container>
    )
}

export { Questions };