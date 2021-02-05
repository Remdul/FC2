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
      Notes {
        items {
          id
          name
          points
          description
          peopleID
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
      Notes {
        items {
          id
          name
          points
          description
          peopleID
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
      Notes {
        items {
          id
          name
          points
          description
          peopleID
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
  }
`;
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
      id
      name
      points
      description
      peopleID
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
      peopleID
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
      peopleID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
