import React from 'react';
import { ReactComponent as Back  } from '../../assets/back.svg'
import {HeaderContainer, BackWrapper, HeaderText, DummyBox} from './HeaderStyle';

type HeaderProps = {
  text: string;
};

const Header = ({ text }: HeaderProps) => {
  return (
    <HeaderContainer>
      <BackWrapper><Back/></BackWrapper>
      <HeaderText>{text}</HeaderText>
      <DummyBox></DummyBox>
    </HeaderContainer>
  );
};

export default Header;
