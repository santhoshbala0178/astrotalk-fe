import { useReactiveVar } from '@apollo/client';
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  border-radius: 15px;
  border: none;
  padding: 5px 10px;
  box-sizing: border-box;
  height: 30px;
  background: #7ea016;
  color: white;

  &: hover {
    cursor: pointer;
    color: black;
    background: #b5dc3f;
  }
`;

interface Props {
  loadMore: any;
}

const LoadMore: React.FC<Props> = ({loadMore}) => {
  return (
    <StyledDiv>
      <StyledButton onClick={() => loadMore()}>
        Load more...
      </StyledButton>
    </StyledDiv>
  );
};
export default LoadMore;
