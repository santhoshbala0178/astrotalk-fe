import React from 'react';
import styled from 'styled-components';

const StyledAboutMeDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #f3f3f3;
  border-radius: 7px;
  padding: 15px;
  font-size: 14px;
`;
const StyledHeaderDiv = styled.div`
  font-size: 20px;
  font-weight: 500;
  font-family: 'Open Sans', sans-serif;
  color: #424242;
  text-align: center;
  margin-bottom: 20px;
`;

const StyledAboutMeContent = styled.div`
  line-height: 1.42857143;
  font-weight: lighter;
  text-align: justify;
`;

interface Props {
  aboutme: string;
}

const DetailAboutMe: React.FC<Props> = ({ aboutme }) => (
  <StyledAboutMeDiv>
    <StyledHeaderDiv>About me</StyledHeaderDiv>
    <StyledAboutMeContent>{aboutme}</StyledAboutMeContent>
  </StyledAboutMeDiv>
);

export default DetailAboutMe;
