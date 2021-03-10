import React from 'react';
import styled from 'styled-components';
import StarRating from '../../StarRating';
import DetailProgressBar from '../DetailProgressBar';
import DetailRatingNumber from '../DetailRatingNumber';
import DetailReviewScore from '../DetailReviewScore';
import DetailSingleReview from '../DetailSingleReview';

const StyledReviewsHeader = styled.div`
  padding-bottom: 5px;
  border-bottom: 1px solid #f7d8d8;
`;

const StyledReviewSummaryHolder = styled.div`
  display: flex;
  margin: 10px;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const StyledStarRatingHolder = styled.div``;

const SyledSummaryHolderDiv = styled.div`
  width: 50%;
  text-align: center;
  @media (max-width: 500px) {
    margin-bottom: 30px;
    width: 100%;
  }
`;

const SyledProgressHolderDiv = styled.div`
  width: 50%;
  text-align: center;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const StyledDetailedReviewHolder = styled.div`
  margin-top: 20px;
`;

interface Props {
  reviewDetails: any;
  allDetails: any;
}

const DetailReview: React.FC<Props> = ({ reviewDetails, allDetails }) => {
  function calculatePercentage(individualValue, totalValue) {
    const value = ((individualValue / totalValue) * 100).toFixed(2);
    return value;
  }

  return (
    <div>
      <StyledReviewsHeader>Reviews:</StyledReviewsHeader>
      <StyledReviewSummaryHolder>
        <SyledSummaryHolderDiv>
          <DetailReviewScore score={reviewDetails.overallRating} />
          <StyledStarRatingHolder>
            {[...Array(Math.ceil(reviewDetails?.overallRating)).keys()].map(
              (val) => (
                <StarRating width="20" height="20" key={`overall_${val}`} />
              ),
            )}
          </StyledStarRatingHolder>
          <DetailRatingNumber rating={reviewDetails.totalReviews} />
        </SyledSummaryHolderDiv>
        <SyledProgressHolderDiv>
          <DetailProgressBar
            rating="5"
            totalReviews={reviewDetails.individualRating5}
            percentage={`${calculatePercentage(
              reviewDetails.individualRating5,
              reviewDetails.totalReviews,
            )}`}
            color="#79c9a1"
          />
          <DetailProgressBar
            rating="4"
            totalReviews={reviewDetails.individualRating4}
            percentage={`${calculatePercentage(
              reviewDetails.individualRating4,
              reviewDetails.totalReviews,
            )}`}
            color="#aed888"
          />
          <DetailProgressBar
            rating="3"
            totalReviews={reviewDetails.individualRating3}
            percentage={`${calculatePercentage(
              reviewDetails.individualRating3,
              reviewDetails.totalReviews,
            )}`}
            color="#ffd935"
          />
          <DetailProgressBar
            rating="2"
            totalReviews={reviewDetails.individualRating2}
            percentage={`${calculatePercentage(
              reviewDetails.individualRating2,
              reviewDetails.totalReviews,
            )}`}
            color="#ffb235"
          />
          <DetailProgressBar
            rating="1"
            totalReviews={reviewDetails.individualRating1}
            percentage={`${calculatePercentage(
              reviewDetails.individualRating1,
              reviewDetails.totalReviews,
            )}`}
            color="#ff8c5a"
          />
        </SyledProgressHolderDiv>
      </StyledReviewSummaryHolder>
      <StyledDetailedReviewHolder>
        {allDetails.map((eachReview, index) => (
          <DetailSingleReview
            rating={eachReview.rating}
            date={eachReview.date}
            reviewText={eachReview.reviewText}
            key={`each_review_${index + 1}`}
          />
        ))}
      </StyledDetailedReviewHolder>
    </div>
  );
};

export default DetailReview;
