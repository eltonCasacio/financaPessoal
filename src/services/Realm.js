import Realm from 'realm';

import CategorySchema from '../schemas/CategorySchema';
import EntrySchema from '../schemas/EntrySchema';

import {getDefaultCategories} from './Categories';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CategorySchema, EntrySchema],
    schemaVersion: 3,
  });
  initDB(realm);
  return realm;
};

export const initDB = realm => {
  const categoriesLength = realm.objects('Category').length;

  if (categoriesLength === 0) {
    const categories = getDefaultCategories();

    try {
      realm.write(() => {
        categories.forEach(category => {
          realm.create('Category', category, true);
        });
      });
    } catch (error) {}
  }
};

export const dropDB = realm => {
  realm.write(() => {
    realm.deleteAll();
  });
};
