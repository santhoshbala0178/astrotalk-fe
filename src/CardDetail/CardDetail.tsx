import React from 'react';
import styled from 'styled-components';

const StyledCardDetail = styled.div`
  font-size: 13px;
  color: #424242;
  margin-bottom: 5px;
`;

interface Props {
  text: string;
}

const CardDetail: React.FC<Props> = ({ text }) => (
  <StyledCardDetail>{text}</StyledCardDetail>
);

export default CardDetail;
