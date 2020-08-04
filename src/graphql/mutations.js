/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDestiny = /* GraphQL */ `
  mutation CreateDestiny(
    $input: CreateDestinyInput!
    $condition: ModelDestinyConditionInput
  ) {
    createDestiny(input: $input, condition: $condition) {
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
export const updateDestiny = /* GraphQL */ `
  mutation UpdateDestiny(
    $input: UpdateDestinyInput!
    $condition: ModelDestinyConditionInput
  ) {
    updateDestiny(input: $input, condition: $condition) {
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
export const deleteDestiny = /* GraphQL */ `
  mutation DeleteDestiny(
    $input: DeleteDestinyInput!
    $condition: ModelDestinyConditionInput
  ) {
    deleteDestiny(input: $input, condition: $condition) {
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
