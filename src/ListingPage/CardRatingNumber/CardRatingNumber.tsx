import React from 'react';
import styled from 'styled-components';

const SyledCardRatingHolder = styled.div`
  text-align: center;
  width: 100%;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
`;

const StyledCardRating = styled.span`
  font-size: 9px;
  color: #848484;
  margin-bottom: 5px;
  font-weight: 600;
`;

const StyledImage = styled.img`
  width: 8px;
  height: 8px;
  padding-right: 2px;
`;

interface Props {
  ratings: string;
}

const CardRatingNumber: React.FC<Props> = ({ ratings }) => (
  <SyledCardRatingHolder>
    <StyledImage src="/assets/rating.png" alt="Total Rating" />
    <StyledCardRating>{`${ratings} total`}</StyledCardRating>
  </SyledCardRatingHolder>
);

export default CardRatingNumber;
