// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { People, Note } = initSchema(schema);

export {
  People,
  Note
};