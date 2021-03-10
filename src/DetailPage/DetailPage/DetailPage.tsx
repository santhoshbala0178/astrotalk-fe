import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { gql, useQuery } from '@apollo/client';
import CardDetail from '../../CardDetail';
import DetailType from '../DetailType';
import DetailImage from '../DetailImage';
import DetailName from '../DetailName';
import DetailWithIcon from '../DetailWithIcon';
import DetailAboutMe from '../DetailAboutMe';
import DetailReview from '../DetailReview';
import { ASTROLOGER_TILE_DATA } from '../../ListingPage/ListingPage/ListingPage';
import Loader from '../../Loader';

const StyledDetailPage = styled.div`
  margin-left: 12%;
  margin-right: 20px;
  padding-left: 10px;
  @media (max-width: 500px) {
    margin-left: 2%;
  }
`;

const StyledDetailHeader = styled.div`
  display: flex;
  margin: 20px 0px;
`;

const StyledDetailWithIconHolder = styled.div`
  margin-bottom: 10px;
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const StyledCardDetailHolder = styled.div`
  margin-bottom: 10px;
`;

const StyledExperienceHolder = styled.div`
  margin-bottom: 10px;
`;

const StyledDetailsDiv = styled.div`
  margin-top: 2%;
  padding-left: 2%;
  width: 85%;
  @media (max-width: 500px) {
    width: 60%;
  }
  @media (max-width: 250px) {
    width: 100%;
  }
`;

const StyledDetailAboutMe = styled.div`
  margin: 10px 0px;
  width: 100%;
`;

const StyledSpecialityHolder = styled.div`
  display: flex;

  @media (max-width: 250px) {
    flex-direction: column;
  }
`;

export const GET_ASTROLOGER = gql`
  query GetAstrologer($id: String) {
    astrologer(id: $id) {
      ...AstrologerData
      aboutSelf
      work {
        chatMinutes
        callMinutes
        reports
      }
      allReviews {
        rating
        date
        reviewText
      }
    }
  }
  ${ASTROLOGER_TILE_DATA}
`;

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useQuery(GET_ASTROLOGER, {
    variables: { id },
  });

  if (loading) return <Loader />;
  if (error) return <div>Error in Loading listing page</div>;
  if (!data) return <p>Data not found</p>;

  return (
    <StyledDetailPage>
      <StyledDetailHeader>
        <DetailImage />
        <StyledDetailsDiv>
          <DetailName name={data?.astrologer.name} />
          <StyledDetailWithIconHolder>
            <DetailWithIcon
              icon="/assets/chatoffline.png"
              tag="mins"
              work={data.astrologer.work.chatMinutes}
            />
            <DetailWithIcon
              icon="/assets/calloffline.png"
              tag="mins"
              work={data.astrologer.work.callMinutes}
            />
            <DetailWithIcon
              icon="/assets/reports.png"
              tag="reports"
              work={`${data.astrologer.work.reports}`}
            />
          </StyledDetailWithIconHolder>
          <StyledCardDetailHolder>
            <CardDetail text={`${data.astrologer.languages.join(', ')}`} />
          </StyledCardDetailHolder>
          <StyledExperienceHolder>
            <DetailWithIcon
              icon="/assets/education.png"
              tag="Years"
              work={`${data.astrologer.experience}`}
            />
          </StyledExperienceHolder>
          <StyledSpecialityHolder>
            {data.astrologer.specialities.map((speciality, index) => (
              <DetailType text={speciality} key={`${index + 1}`} />
            ))}
          </StyledSpecialityHolder>
        </StyledDetailsDiv>
      </StyledDetailHeader>
      <StyledDetailAboutMe>
        <DetailAboutMe aboutme={data.astrologer.aboutSelf} />
      </StyledDetailAboutMe>
      <DetailReview
        reviewDetails={data.astrologer.reviewDetails}
        allDetails={data.astrologer.allReviews}
      />
    </StyledDetailPage>
  );
};

export default DetailPage;
