import React, { useState } from "react";
import {
  ButtonDrawer,
  Container,
  DrawerContainer,
  DrawerContent,
  LinkContainer,
  LinkContent,
} from "./styles";

import { Typography } from "@components/typography";
import { Primary } from "@components/buttons";

import { BsList, BsPatchQuestion } from "react-icons/bs";
import { ImPriceTags } from "react-icons/im";
import { RiUserVoiceFill } from "react-icons/ri";
import { MdClose, MdHome } from "react-icons/md";
import { GoTextSize } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";

const Drawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <ButtonDrawer onClick={showDrawer}>
        <BsList color="#FFF" size={25} />
      </ButtonDrawer>
      <DrawerContainer
        placement="right"
        closeIcon={<MdClose color="#000" size={25} />}
        onClose={onClose}
        open={open}
        width={300}
        style={{ backgroundColor: "#FFF" }}
      >
        <DrawerContent>
          <LinkContainer>
            <LinkContent href="#about">
              <MdHome color="#43B4EE" size={20} />
              <Typography color="blue500">about</Typography>
            </LinkContent>
            <LinkContent href="#services">
              <IoMdSettings color="#43B4EE" size={20} />
              <Typography color="blue500">services</Typography>
            </LinkContent>
            <LinkContent href="#questions">
              <BsPatchQuestion color="#43B4EE" size={20} />
              <Typography color="blue500">questions</Typography>
            </LinkContent>
            <LinkContent href="#pricing">
              <ImPriceTags color="#43B4EE" size={20} />
              <Typography color="blue500">pricing</Typography>
            </LinkContent>
            <LinkContent href="#testmonials">
              <RiUserVoiceFill color="#43B4EE" size={20} />
              <Typography color="blue500">testmonials</Typography>
            </LinkContent>
            <LinkContent href="#blog">
              <GoTextSize color="#43B4EE" size={20} />
              <Typography color="blue500">blog</Typography>
            </LinkContent>
          </LinkContainer>
          <Primary href="/login">Free trial</Primary>
        </DrawerContent>
      </DrawerContainer>
    </Container>
  );
};

export default Drawer;
