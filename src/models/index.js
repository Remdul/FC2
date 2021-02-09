// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Member, Note, User } = initSchema(schema);

export {
  Member,
  Note,
  User
};