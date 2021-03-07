import React from 'react';
import styled from 'styled-components';

const StyledCardRate = styled.span`
  font-size: 12px;
  color: #424242;
  margin-bottom: 5px;
  font-weight: 600;
`;

const StyledImage = styled.img`
  width: 10px;
  height: 10px;
  padding-right: 2px;
  g {
    fill: gray;
  }
`;

interface Props {
  rate: string;
}

const CardRate: React.FC<Props> = ({ rate }) => (
  <div>
    <StyledImage src="/assets/rupee.svg" alt="Rupee" />
    <StyledCardRate>
      {rate}
      /min
    </StyledCardRate>
  </div>
);

export default CardRate;
