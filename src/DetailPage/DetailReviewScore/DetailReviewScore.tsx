import React from 'react';
import styled from 'styled-components';

const StyledReviewScore = styled.div`
  color: #333;
  font-size: 64px;
  font-weight: 100;
  line-height: 64px;
`;

interface Props {
  score: string;
}

const DetailReviewScore: React.FC<Props> = ({ score }) => (
  <StyledReviewScore>{score}</StyledReviewScore>
);

export default DetailReviewScore;
