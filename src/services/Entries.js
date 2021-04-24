import moment from '../vendors/moment';
import {getRealm} from './Realm';
import {getUUID} from './UUID';

export const saveEntries = async (value, entry = {}) => {
  let data = {};

  try {
    const realm = await getRealm();
    realm.write(() => {
      data = {
        id: value.id || entry.id || getUUID(),
        amount: value.amount || entry.amount || 0,
        entryAt: value.entryAt || entry.entryAt || new Date(),
        description: value.category.name,
        photo: value.photo,
        address: value.address,
        latitude: value.latitude,
        longitude: value.longitude,
        isInit: value.isInit || false,
        category: value.category || entry.category,
      };

      realm.create('Entry', data, true);
      return data;
    });
  } catch (error) {
    console.error(`saveEntries :: ERRO AO SALVAR lançamento,
    ${JSON.stringify(error)}`);
  }
};

export const getEntries = async (days, category) => {
  let realm = await getRealm();

  realm = realm.objects('Entry');

  if (days > 0) {
    const date = moment().subtract(days, 'days').toDate();

    realm = realm.filtered('entryAt >= $0', date);
  }

  if (category && category.id) {
    realm = realm.filtered('category == $0', category);
  }
  const entries = realm.sorted('entryAt', true);
  return entries;
};

export const deleteEntries = async entry => {
  const realm = await getRealm();
  try {
    realm.write(() => {
      realm.delete(entry);
    });
  } catch (error) {
    throw {
      msg: `deleteEntries :: Erro ao remover cliente 
    ${JSON.stringify(error)}`,
    };
  }
};
