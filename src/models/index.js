// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Member, Note } = initSchema(schema);

export {
  Member,
  Note
};