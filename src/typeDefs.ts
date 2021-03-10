export const typeDefs = `
""""""
directive @cacheControl(maxAge: Int, scope: CacheControlScope) on FIELD_DEFINITION | OBJECT | INTERFACE

""""""
type Query {
  """"""
  astrologers(sortBy: SortEnum, searchName: String, after: String, pageSize: Int): AstrologerConnection!

  """"""
  astrologer(id: String): Astrologer
}

""""""
enum SortEnum {
  """"""
  NO_SORT

  """"""
  EXP_HIGH

  """"""
  EXP_LOW

  """"""
  PRICE_HIGH

  """"""
  PRICE_LOW

  """"""
  RATING_HIGH
}

""""""
type AstrologerConnection {
  """"""
  cursor: String!

  """"""
  hasMore: Boolean!

  """"""
  astrologers: [Astrologer]
}

""""""
type Astrologer {
  """"""
  id: String!

  """"""
  name: String!

  """"""
  experience: Int!

  """"""
  languages: [String!]

  """"""
  specialities: [String!]

  """"""
  aboutSelf: String

  """"""
  rates: Rates

  """"""
  work: Work

  """"""
  reviewDetails: ReviewDetails

  """"""
  allReviews: [Review]
}

""""""
type Rates {
  """"""
  chatRate: Int

  """"""
  callRate: Int

  """"""
  reportRate: Int
}

""""""
type Work {
  """"""
  chatMinutes: String

  """"""
  callMinutes: String

  """"""
  reports: Int
}

""""""
type ReviewDetails {
  """"""
  overallRating: Float!

  """"""
  totalReviews: Int!

  """"""
  individualRating(rating: RatingEnum): Int!
}

""""""
enum RatingEnum {
  """"""
  RATING_1

  """"""
  RATING_2

  """"""
  RATING_3

  """"""
  RATING_4

  """"""
  RATING_5
}

""""""
type Review {
  """"""
  rating: Int!

  """"""
  date: DateTime!

  """"""
  reviewText: String
}

"""
A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the \`date-time\` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
"""
scalar DateTime

""""""
enum CacheControlScope {
  """"""
  PUBLIC

  """"""
  PRIVATE
}

"""The \`Upload\` scalar type represents a file upload."""
scalar Upload
`