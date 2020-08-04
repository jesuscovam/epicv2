/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDestiny = /* GraphQL */ `
  query GetDestiny($id: ID!) {
    getDestiny(id: $id) {
      id
      name
      description
      image
      map
      reservation
      price
      createdAt
      updatedAt
    }
  }
`;
export const listDestinys = /* GraphQL */ `
  query ListDestinys(
    $filter: ModelDestinyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDestinys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        map
        reservation
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
