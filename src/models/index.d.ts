import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class People {
  readonly id: string;
  readonly firstName?: string;
  readonly subID: string;
  constructor(init: ModelInit<People>);
  static copyOf(source: People, mutator: (draft: MutableModel<People>) => MutableModel<People> | void): People;
}

export declare class Note {
  readonly id: string;
  readonly name: string;
  readonly points: number;
  readonly description?: string;
  constructor(init: ModelInit<Note>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note>) => MutableModel<Note> | void): Note;
}