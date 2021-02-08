/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserPool = /* GraphQL */ `
  query GetUserPool($id: ID!) {
    getUserPool(id: $id) {
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
export const listUserPools = /* GraphQL */ `
  query ListUserPools(
    $filter: ModelUserPoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserPools = /* GraphQL */ `
  query SyncUserPools(
    $filter: ModelUserPoolFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserPools(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
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
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncNotes = /* GraphQL */ `
  query SyncNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
