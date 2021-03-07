import React from 'react';
import styled from 'styled-components';

const StyledDetailTypeHolder = styled.div`
  font-size: 13px;
  color: #424242;
  margin-bottom: 10px;
  margin-right: 10px;
`;

const StyledDetailType = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  padding: 5px 10px;
  display: inline-block;
  margin: 5px 0px;
`;

interface Props {
  text: string;
}

const DetailType: React.FC<Props> = ({ text }) => (
  <StyledDetailTypeHolder>
    <StyledDetailType>{text}</StyledDetailType>
  </StyledDetailTypeHolder>
);

export default DetailType;
