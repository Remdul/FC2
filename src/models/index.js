// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserPool, Note } = initSchema(schema);

export {
  UserPool,
  Note
};