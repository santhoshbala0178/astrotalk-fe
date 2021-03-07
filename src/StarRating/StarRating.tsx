import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img<{ width: string; height: string }>`
  width: ${(p) => p.width}px;
  height: ${(p) => p.height}px;
`;

interface Props {
  width: string;
  height: string;
}

const StarRating: React.FC<Props> = ({ width, height }) => (
  <StyledImage
    src="/assets/star.svg"
    alt="Star Rating"
    width={width}
    height={height}
  />
);

export default StarRating;
