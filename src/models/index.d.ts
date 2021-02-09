import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class UserPool {
  readonly id: string;
  readonly userName?: string;
  readonly createdDate?: string;
  readonly firstLogin?: boolean;
  readonly userEmail?: string;
  readonly userSub?: string;
  readonly firstName?: string;
  constructor(init: ModelInit<UserPool>);
  static copyOf(source: UserPool, mutator: (draft: MutableModel<UserPool>) => MutableModel<UserPool> | void): UserPool;
}

export declare class Note {
  readonly id: string;
  readonly name: string;
  readonly points: number;
  readonly description?: string;
  constructor(init: ModelInit<Note>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note>) => MutableModel<Note> | void): Note;
}