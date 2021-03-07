import { gql, useQuery, useReactiveVar } from '@apollo/client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { searchNameVar, sortByVar } from '../../cache';
import Loader from '../../Loader';
import Card from '../Card';
import LoadMore from '../LoadMore';
import SubHeader from '../SubHeader';

const StyledListingPage = styled.div`
  margin-left: 12%;
`;

const StyledCardHolder = styled.div`
  margin: 25px;
  display: flex;
  flex-wrap: wrap;
`;

export const ASTROLOGER_TILE_DATA = gql`
  fragment AstrologerData on Astrologer {
    id
    name
    experience
    languages
    specialities
    rates {
      chatRate
      callRate
      reportRate
    }
    reviewDetails {
      overallRating
      totalReviews
      individualRating1: individualRating(rating: RATING_1)
      individualRating2: individualRating(rating: RATING_2)
      individualRating3: individualRating(rating: RATING_3)
      individualRating4: individualRating(rating: RATING_4)
      individualRating5: individualRating(rating: RATING_5)
    }
  }
`;

export const GET_ASTROLOGERS = gql`
  query GetAstrologers($sortBy: SortEnum, $searchName: String, $after: String) {
    astrologers(sortBy: $sortBy, searchName: $searchName, after: $after) {
      cursor,
      hasMore,
      astrologers {
        ...AstrologerData
      }
    }
  }
  ${ASTROLOGER_TILE_DATA}
`;

const ListingPage: React.FC = () => {
  const sortBy = useReactiveVar(sortByVar);
  const searchName = useReactiveVar(searchNameVar);
  const [isLoadingMore, changeIsLoadingMore] = useState(false);

  const { data, loading, error, fetchMore} = useQuery(GET_ASTROLOGERS, {
    variables: { sortBy, searchName},
  });


  async function loadMore() {
    changeIsLoadingMore(true)
    await fetchMore({
      variables: {
        sortBy, searchName,
        after: data.astrologers.cursor
      }
    });
    changeIsLoadingMore(false)
  }

  return (
    <StyledListingPage>
      <SubHeader />
      <StyledCardHolder>
        {loading && <Loader />}
        {error && <div>Error in Loading listing page</div>}
        {data &&
          data.astrologers.astrologers.map((astrologer, index) => (
            <Card astrologer={astrologer} key={`${index + 1}`} />
          ))}
      </StyledCardHolder>
      {data && data.astrologers &&
        data.astrologers.hasMore &&
        (
          isLoadingMore?<Loader/>: <LoadMore loadMore={loadMore} />
        )}
    </StyledListingPage>
  );
};

export default ListingPage;
