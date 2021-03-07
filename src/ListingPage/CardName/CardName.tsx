import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledCardName = styled.div`
  font-weight: 500;
  margin-bottom: 5px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &: hover {
    cursor: pointer;
  }
`;

interface Props {
  id: number;
  name: string;
}

const CardName: React.FC<Props> = ({ id, name }) => (
  <StyledCardName>
    <StyledLink to={`/best-astrologer/${id}`}>{name}</StyledLink>
  </StyledCardName>
);

export default CardName;
