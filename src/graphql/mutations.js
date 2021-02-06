/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPeople = /* GraphQL */ `
  mutation CreatePeople(
    $input: CreatePeopleInput!
    $condition: ModelPeopleConditionInput
  ) {
    createPeople(input: $input, condition: $condition) {
      id
      firstName
      subID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updatePeople = /* GraphQL */ `
  mutation UpdatePeople(
    $input: UpdatePeopleInput!
    $condition: ModelPeopleConditionInput
  ) {
    updatePeople(input: $input, condition: $condition) {
      id
      firstName
      subID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deletePeople = /* GraphQL */ `
  mutation DeletePeople(
    $input: DeletePeopleInput!
    $condition: ModelPeopleConditionInput
  ) {
    deletePeople(input: $input, condition: $condition) {
      id
      firstName
      subID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      points
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      points
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      points
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createUserPool = /* GraphQL */ `
  mutation CreateUserPool($input: CreateUserPoolInput!) {
    createUserPool(input: $input) {
      userID
      userName
    }
  }
`;
export const updateUserPool = /* GraphQL */ `
  mutation UpdateUserPool($input: UpdateUserPoolInput!) {
    updateUserPool(input: $input) {
      userID
      userName
    }
  }
`;
export const deleteUserPool = /* GraphQL */ `
  mutation DeleteUserPool($input: DeleteUserPoolInput!) {
    deleteUserPool(input: $input) {
      userID
      userName
    }
  }
`;
