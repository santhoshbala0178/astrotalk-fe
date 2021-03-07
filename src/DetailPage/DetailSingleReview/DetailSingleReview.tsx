import React from 'react';
import styled from 'styled-components';
import StarRating from '../../StarRating';

const StyledReviewHolder = styled.div`
  padding: 10px;
  border-bottom: 1px solid #f7d8d8;
  display: flex;
`;

const StyledLeftHolder = styled.div`
  width: 7%;
`;

const StyledUserHolder = styled.div`
  width: 43px;
  height: 42px;
  text-align: center;
  border-radius: 33px;
  font-weight: 700;
  margin: auto;
  background: #1d514b;
`;

const StyledUserInitial = styled.div`
  font-size: 17px;
  color: white;
  line-height: 1.42857143;
  padding-top: 21%;
`;

const StyledRightHolder = styled.div`
  width: 90%;
`;

const StyledReviewContent = styled.div`
  display: flex;
  line-height: 25px;
`;
const StyledStarHolder = styled.div`
  margin-right: 10px;
  margin-top: 2px;
`;

const StyledDateDiv = styled.div`
  color: #aaa;
  font-size: 12px;
`;

const StyledReviewText = styled.div`
  font-size: 14px;
  color: #717171;
  text-align: left;
`;

interface Props {
  rating: string;
  date: number;
  reviewText: string;
}

const DetailSingleReview: React.FC<Props> = ({ rating, date, reviewText }) => (
  <StyledReviewHolder>
    <StyledLeftHolder>
      <StyledUserHolder>
        <StyledUserInitial>J</StyledUserInitial>
      </StyledUserHolder>
    </StyledLeftHolder>
    <StyledRightHolder>
      <StyledReviewContent>
        <StyledStarHolder>
          {[...Array(rating).keys()].map((val) => (
            <StarRating width="15" height="15" key={`single__${val}`} />
          ))}
        </StyledStarHolder>
        <StyledDateDiv>
          {new Date(date).toLocaleDateString('en-gb', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            timeZone: 'utc',
          })}
        </StyledDateDiv>
      </StyledReviewContent>
      <StyledReviewText>{reviewText}</StyledReviewText>
    </StyledRightHolder>
  </StyledReviewHolder>
);

export default DetailSingleReview;
