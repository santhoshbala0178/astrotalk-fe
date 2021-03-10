import React from 'react';
import styled from 'styled-components';

const StyledImageHolder = styled.div`
  margin-right: 30px;
  width: 15%;
  @media (max-width: 500px) {
    width: 40%;
  }
  @media (max-width: 250px) {
    display: none;
  }
`;

const StyledImage = styled.img`
  border-radius: 50%;
  width: 100%;
  min-width: 100px;
`;

const DetailImage: React.FC = () => (
  <StyledImageHolder>
    <StyledImage src="/assets/TAT_web_logo2.png" />
  </StyledImageHolder>
);

export default DetailImage;
