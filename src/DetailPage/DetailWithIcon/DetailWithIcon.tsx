import React from 'react';
import styled from 'styled-components';

const StyledHolderDiv = styled.div`
  margin-right: 40px;
`;

const StyledImage = styled.img`
  width: 15px;
  height: 15px;
  padding-right: 10px;
`;

const StyledDetail = styled.span`
  font-size: 16px;
  color: #424242;
  margin-bottom: 5px;
  font-weight: 600;
`;

const StyledText = styled.span`
  font-size: 14px;
  font-weight: 400;
  margin-left: 5px;
  color: #4a4444;
  font-weight: lighter;
`;

interface Props {
  icon: string;
  tag: string;
  work: string;
}

const DetailWithIcon: React.FC<Props> = ({ icon, tag, work }) => (
  <StyledHolderDiv>
    <StyledImage src={icon} alt="Rupee" />
    <StyledDetail>{work}</StyledDetail>
    <StyledText>{tag}</StyledText>
  </StyledHolderDiv>
);

export default DetailWithIcon;
