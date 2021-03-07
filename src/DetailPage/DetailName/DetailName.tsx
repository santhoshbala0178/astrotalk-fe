import React from 'react';
import styled from 'styled-components';

const StyledDetailName = styled.div`
  font-size: 19px;
  font-weight: 500;
  font-family: 'Open Sans', sans-serif;
  color: #424242;
  width: 100%;
  margin-bottom: 20px;
`;

interface Props {
  name: string;
}

const DetailName: React.FC<Props> = ({ name }) => (
  <StyledDetailName>{name}</StyledDetailName>
);

export default DetailName;
