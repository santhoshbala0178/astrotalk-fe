import React from 'react';
import styled from 'styled-components';

const SyledDetailRatingHolder = styled.div`
  text-align: center;
  width: 100%;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
`;

const StyledDetailRating = styled.span`
  font-size: 15px;
  color: #848484;
  margin-bottom: 5px;
  font-weight: lighter;
`;

const StyledImage = styled.img`
  width: 15px;
  height: 15px;
  padding-right: 5px;
`;

interface Props {
  rating: string;
}

const DetailRatingNumber: React.FC<Props> = ({ rating }) => (
  <SyledDetailRatingHolder>
    <StyledImage src="/assets/rating.png" alt="Total Rating" />
    <StyledDetailRating>{`${rating} total`}</StyledDetailRating>
  </SyledDetailRatingHolder>
);

export default DetailRatingNumber;
