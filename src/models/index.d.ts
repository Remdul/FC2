import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Member {
  readonly id: string;
  readonly userName?: string;
  readonly createdDate?: string;
  readonly firstLogin?: boolean;
  readonly userEmail?: string;
  readonly userSub?: string;
  readonly firstName?: string;
  constructor(init: ModelInit<Member>);
  static copyOf(source: Member, mutator: (draft: MutableModel<Member>) => MutableModel<Member> | void): Member;
}

export declare class Note {
  readonly id: string;
  readonly name: string;
  readonly points: number;
  readonly description?: string;
  constructor(init: ModelInit<Note>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note>) => MutableModel<Note> | void): Note;
}