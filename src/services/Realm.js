import Realm from 'realm';

import CategorySchema from '../schemas/CategorySchema';
import EntrySchema from '../schemas/EntrySchema';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CategorySchema, EntrySchema],
    schemaVersion: 4,
  });
  return realm;
};

export const dropDB = realm => {
  realm.write(() => {
    realm.deleteAll();
  });
};
