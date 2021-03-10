import React from 'react';
import { InMemoryCache } from '@apollo/client';
import '@testing-library/jest-dom';
import ListingPage, { GET_ASTROLOGERS } from '../ListingPage/ListingPage/ListingPage';
import {
  renderApollo,
  cleanup,
  screen
} from '../test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';


const mockAstrologers = [
  {
    __typename: 'Astrologer',
    id: '1',
    name: 'Bharath',
    experience: 7,
    languages: ['English', 'Hindi'],
    specialities: ['Tarot', 'Numerology'],
    aboutSelf:
      'Bharath is a renowned Astrologer from India with an experience of more than 07 years in the field of Astrology. He is an expert Vedic Astrologer. He is an IIT graduate and his belief in ancient Hindu techniques and astrology gave him the confidence to reach out to the larger public and help them overcome their problems in their lives with the help of astrology. He believes in providing the most productive and soothing remedies to our customers. His area of expertise Marriage problems, Property, Health issues, and Vastu.',
    rates: {
      __typename: 'Rates',
      chatRate: 7,
      callRate: 10,
      reportRate: 110,
    },
    work: {
      __typename: 'Work',
      chatMinutes: '8K',
      callMinutes: '10K',
      reports: 12,
    },
    reviewDetails: {
      __typename: 'ReviewDetails',
      overallRating: 4.86,
      totalReviews: 1829,
      individualRating5: 1219,
      individualRating4: 200,
      individualRating3: 250,
      individualRating2: 100,
      individualRating1: 50,
    },
    allReviews: [
      {
        __typename: 'Review',
        rating: 4,
        date: 1614959127,
        reviewText: 'thanks for the help!!',
      },
      {
        __typename: 'Review',
        rating: 2,
        date: 1514959127,
        reviewText: 'this is outrageous',
      },
    ],
  },
  {
    __typename: 'Astrologer',
    id: '2',
    name: 'Pooja',
    experience: 4,
    languages: ['English', 'Hindi'],
    specialities: ['Tarot', 'Numerology'],
    aboutSelf:
      'Bharath is a renowned Astrologer from India with an experience of more than 07 years in the field of Astrology. He is an expert Vedic Astrologer. He is an IIT graduate and his belief in ancient Hindu techniques and astrology gave him the confidence to reach out to the larger public and help them overcome their problems in their lives with the help of astrology. He believes in providing the most productive and soothing remedies to our customers. His area of expertise Marriage problems, Property, Health issues, and Vastu.',
    rates: {
      __typename: 'Rates',
      chatRate: 2,
      callRate: 10,
      reportRate: 110,
    },
    work: {
      __typename: 'Work',
      chatMinutes: '8K',
      callMinutes: '10K',
      reports: 12,
    },
    reviewDetails: {
      __typename: 'ReviewDetails',
      overallRating: 2.86,
      totalReviews: 2500,
      individualRating5: 1219,
      individualRating4: 200,
      individualRating3: 250,
      individualRating2: 100,
      individualRating1: 50,
    },
    allReviews: [
      {
        __typename: 'Review',
        rating: 4,
        date: 1614959127,
        reviewText: 'thanks for the help!!',
      },
      {
        __typename: 'Review',
        rating: 2,
        date: 1514959127,
        reviewText: 'this is outrageous',
      },
    ],
  },
  {
    __typename: 'Astrologer',
    id: '3',
    name: 'Sandy',
    experience: 7,
    languages: ['English', 'Hindi'],
    specialities: ['Tarot', 'Numerology'],
    aboutSelf:
      'Bharath is a renowned Astrologer from India with an experience of more than 07 years in the field of Astrology. He is an expert Vedic Astrologer. He is an IIT graduate and his belief in ancient Hindu techniques and astrology gave him the confidence to reach out to the larger public and help them overcome their problems in their lives with the help of astrology. He believes in providing the most productive and soothing remedies to our customers. His area of expertise Marriage problems, Property, Health issues, and Vastu.',
    rates: {
      __typename: 'Rates',
      chatRate: 12,
      callRate: 10,
      reportRate: 110,
    },
    work: {
      __typename: 'Work',
      chatMinutes: '8K',
      callMinutes: '10K',
      reports: 12,
    },
    reviewDetails: {
      __typename: 'ReviewDetails',
      overallRating: 1,
      totalReviews: 1029,
      individualRating5: 1219,
      individualRating4: 200,
      individualRating3: 250,
      individualRating2: 100,
      individualRating1: 50,
    },
    allReviews: [
      {
        __typename: 'Review',
        rating: 4,
        date: 1614959127,
        reviewText: 'thanks for the help!!',
      },
      {
        __typename: 'Review',
        rating: 2,
        date: 1514959127,
        reviewText: 'this is outrageous',
      },
    ],
  },
];

describe('Listing Page', () => {
  afterEach(cleanup);

  it('Snapshot Test Listing  Page', async () => {
    const cache = new InMemoryCache({ addTypename: false });
    const mocks = [
      {
        request: {
          query: GET_ASTROLOGERS,
          variables: { sortBy: 'NO_SORT', searchName: '' },
        },
        result: {
          data: {
            astrologers: {
              cursor: '3',
              hasMore: true,
              astrologers: mockAstrologers,
            },
          },
        },
      },
    ];

    const { container, debug, getByText, findAllByText } = await renderApollo(
      <Router>
        <ListingPage />
    </Router>,
      {
        mocks,
        cache,
      }
    );
    await findAllByText('Bharath');

    expect(container).toMatchSnapshot();
  });

  it('render Listing  Page', async () => {
    const cache = new InMemoryCache({ addTypename: false });
    const mocks = [
      {
        request: {
          query: GET_ASTROLOGERS,
          variables: { sortBy: 'NO_SORT', searchName: '' },
        },
        result: {
          data: {
            astrologers: {
              cursor: '3',
              hasMore: true,
              astrologers: mockAstrologers,
            },
          },
        },
      },
    ];

    const { container, debug, getByText, findAllByText } = await renderApollo(
      <Router>
        <ListingPage />
    </Router>,
      {
        mocks,
        cache,
      }
    );
    await findAllByText('Bharath');

    expect(getByText('Bharath')).toBeInTheDocument();
  });

  it('test count of cards', async () => {
    const cache = new InMemoryCache({ addTypename: false });
    const mocks = [
      {
        request: {
          query: GET_ASTROLOGERS,
          variables: { sortBy: 'NO_SORT', searchName: '' },
        },
        result: {
          data: {
            astrologers: {
              cursor: '3',
              hasMore: true,
              astrologers: mockAstrologers,
            },
          },
        },
      },
    ];

    const { container, debug, getAllByTestId, findAllByText } = await renderApollo(
      <Router>
        <ListingPage />
    </Router>,
      {
        mocks,
        cache,
      }
    );
    await findAllByText('Bharath');

    expect(getAllByTestId('astro-card')).toHaveLength(3);
  });

  it('test filter of name', async () => {
    const cache = new InMemoryCache({ addTypename: false });
    const mocks = [
      {
        request: {
          query: GET_ASTROLOGERS,
          variables: { sortBy: 'NO_SORT', searchName: '' },
        },
        result: {
          data: {
            astrologers: {
              cursor: '3',
              hasMore: true,
              astrologers: mockAstrologers,
            },
          },
        },
      },
    ];

    const {
      container,
      debug,
      getByTestId,
      getAllByTestId,
      findByText,
    } = await renderApollo(
      <Router>
        <ListingPage />
    </Router>,
      {
        mocks,
        cache,
      }
    );
    await findByText('Bharath');

    const inputElement = getByTestId('search-input');
    fireEvent.change(inputElement, { target: { value: 'poo' } });

    expect(inputElement.textContent).toBe('poo');
  });
  it('test count of cards', async () => {
    const cache = new InMemoryCache({ addTypename: false });
    const mocks = [
      {
        request: {
          query: GET_ASTROLOGERS,
          variables: { sortBy: 'NO_SORT', searchName: '' },
        },
        result: {
          data: {
            astrologers: {
              cursor: '3',
              hasMore: true,
              astrologers: mockAstrologers,
            },
          },
        },
      },
    ];

    const { container, debug, getAllByTestId, findAllByText } = await renderApollo(
      <Router>
        <ListingPage />
    </Router>,
      {
        mocks,
        cache,
      }
    );
    await findAllByText('Bharath');

    expect(getAllByTestId('astro-card')).toHaveLength(3);
  });
});
