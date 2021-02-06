/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePeople = /* GraphQL */ `
  subscription OnCreatePeople {
    onCreatePeople {
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
export const onUpdatePeople = /* GraphQL */ `
  subscription OnUpdatePeople {
    onUpdatePeople {
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
export const onDeletePeople = /* GraphQL */ `
  subscription OnDeletePeople {
    onDeletePeople {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote {
    onUpdateNote {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote {
    onDeleteNote {
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
export const onCreateUserPool = /* GraphQL */ `
  subscription OnCreateUserPool($userID: String, $userName: String) {
    onCreateUserPool(userID: $userID, userName: $userName) {
      userID
      userName
    }
  }
`;
export const onUpdateUserPool = /* GraphQL */ `
  subscription OnUpdateUserPool($userID: String, $userName: String) {
    onUpdateUserPool(userID: $userID, userName: $userName) {
      userID
      userName
    }
  }
`;
export const onDeleteUserPool = /* GraphQL */ `
  subscription OnDeleteUserPool($userID: String, $userName: String) {
    onDeleteUserPool(userID: $userID, userName: $userName) {
      userID
      userName
    }
  }
`;
