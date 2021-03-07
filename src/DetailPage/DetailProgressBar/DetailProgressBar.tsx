import React from 'react';
import styled from 'styled-components';

const StyledProgressBarHolder = styled.div`
  margin-bottom: 14px;
  display: flex;
`;

const StyledNumberHolder = styled.div`
  font-size: 14px;
`;

const StyledBackgroundDiv = styled.div`
  height: 17px;
  width: 85%;
  background-color: #f5f5f5;
  margin: 0px 20px;
`;

const StyledProgressBar = styled.div<{ percentage: string; color: string }>`
  background-color: ${(p) => p.color};
  width: ${(p) => p.percentage}%;
  height: 100%;
`;

interface Props {
  rating: string;
  totalReviews: string;
  percentage: string;
  color: string;
}

const DetailProgressBar: React.FC<Props> = ({
  rating,
  totalReviews,
  percentage,
  color,
}) => (
  <StyledProgressBarHolder>
    <StyledNumberHolder>{rating}</StyledNumberHolder>
    <StyledBackgroundDiv>
      <StyledProgressBar percentage={percentage} color={color} />
    </StyledBackgroundDiv>
    <StyledNumberHolder>{totalReviews}</StyledNumberHolder>
  </StyledProgressBarHolder>
);

export default DetailProgressBar;
