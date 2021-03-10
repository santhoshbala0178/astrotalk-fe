import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
`;

interface Props {
  width: string;
  height: string;
}

const StarRating: React.FC<Props> = ({ width, height }) => (
  <StyledImage
    src="/assets/star.svg"
    alt="Star Rating"
    width={`${width}px`}
    height={`${height}px`}
  />
);

export default StarRating;
