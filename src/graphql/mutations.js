/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserPool = /* GraphQL */ `
  mutation CreateUserPool(
    $input: CreateUserPoolInput!
    $condition: ModelUserPoolConditionInput
  ) {
    createUserPool(input: $input, condition: $condition) {
      id
      userName
      createdDate
      firstLogin
      userEmail
      userSub
      firstName
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateUserPool = /* GraphQL */ `
  mutation UpdateUserPool(
    $input: UpdateUserPoolInput!
    $condition: ModelUserPoolConditionInput
  ) {
    updateUserPool(input: $input, condition: $condition) {
      id
      userName
      createdDate
      firstLogin
      userEmail
      userSub
      firstName
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserPool = /* GraphQL */ `
  mutation DeleteUserPool(
    $input: DeleteUserPoolInput!
    $condition: ModelUserPoolConditionInput
  ) {
    deleteUserPool(input: $input, condition: $condition) {
      id
      userName
      createdDate
      firstLogin
      userEmail
      userSub
      firstName
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
