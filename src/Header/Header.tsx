import React from 'react';
import styled from 'styled-components';
import AppIcon from '../AppIcon';

const StyledHeaderDiv = styled.div`
  border-bottom: 1px solid #f1f1f1;
  box-shadow: 0 0px 0px 0px #ccc;
  display: flex;
  align-items: center;
`;

const StyledPhoneHolder = styled.div`
  margin-left: auto;
  width: 10%;
  display: flex;
`;

const StyledPhoneIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const StyledPhoneDiv = styled.div`
  font-size: 15px;
  font-weight: 400;
  padding: 0px 10px;
`;

const Header: React.FC = () => (
  <StyledHeaderDiv>
    <AppIcon />
    <StyledPhoneHolder>
      <StyledPhoneIcon src="/assets/phone.svg" alt="Phone no:" />
      <StyledPhoneDiv>+91 9606047081</StyledPhoneDiv>
    </StyledPhoneHolder>
  </StyledHeaderDiv>
);
export default Header;
