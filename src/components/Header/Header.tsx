import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Back  } from '../../assets/back.svg'
import { HeaderContainer, BackWrapper, HeaderText } from './HeaderStyle';

type HeaderProps = {
  text: string;
};

const Header = ({ text }: HeaderProps) => {
  return (
    <HeaderContainer>
      <BackWrapper><Back/></BackWrapper>
      <HeaderText>{text}</HeaderText>
    </HeaderContainer>
  );
};

export default Header;