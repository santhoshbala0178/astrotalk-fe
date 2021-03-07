import React from 'react';
import styled from 'styled-components';
import CardDetail from '../../CardDetail';
import StarRating from '../../StarRating';
import CardImage from '../CardImage';
import CardName from '../CardName';
import CardRate from '../CardRate';
import CardRatingNumber from '../CardRatingNumber';

const StyledCard = styled.div`
  padding: 10px;
  padding-top: 15px;
  box-sizing: border-box;
  width: 32%;
  height: 150px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  margin: 10px;
  display: flex;
`;

const StyledImageHolder = styled.div`
  width: 25%;
  height: 100%;
`;

const StyleCardRatingHolder = styled.div`
  text-align: center;
  margin-top: 5px;
`;

const StyledDetailsHolder = styled.div`
  width: 50%;
  height: 100%;
`;

const StyledActionHolder = styled.div`
  width: 25%;
  height: 100%;
`;

interface Props {
  astrologer: any;
}

const Card: React.FC<Props> = ({ astrologer }) => (
  <StyledCard>
    <StyledImageHolder>
      <CardImage />
      <StyleCardRatingHolder>
        {[
          ...Array(Math.ceil(astrologer?.reviewDetails?.overallRating)).keys(),
        ].map((val) => (
          <StarRating width="15" height="15" key={`${val}`} />
        ))}
      </StyleCardRatingHolder>
      <CardRatingNumber
        ratings={`${astrologer?.reviewDetails?.totalReviews}`}
      />
    </StyledImageHolder>
    <StyledDetailsHolder>
      <CardName name={astrologer?.name} id={astrologer?.id} />
      <CardDetail text={astrologer?.languages.join(', ')} />
      <CardDetail text={astrologer?.specialities.join(', ')} />
      <CardDetail text={`Exp: ${astrologer?.experience} Years`} />
      <CardRate rate={`${astrologer?.rates?.chatRate}`} />
    </StyledDetailsHolder>
    <StyledActionHolder />
  </StyledCard>
);

export default Card;
