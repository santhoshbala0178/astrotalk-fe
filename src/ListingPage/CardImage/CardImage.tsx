import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledImageHolder = styled.div`
  margin-top: 5px;
  width: 68px;
  height: 68px;
  margin: auto;
`;

const StyledImage = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &: hover {
    cursor: pointer;
  }
`;

const CardImage: React.FC = () => (
  <StyledImageHolder>
    <StyledLink to="/best-astrologer/bharath">
      <StyledImage src="/assets/TAT_web_logo2.png" width="40px" height="40px" />
    </StyledLink>
  </StyledImageHolder>
);

export default CardImage;
