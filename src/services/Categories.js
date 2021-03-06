import {getUUID} from './UUID';
import {getRealm} from './Realm';
import {deleteEntries} from './Entries';

export const createCategories = async category => {
  const realm = await getRealm();
  let data = {};

  if (!category.id) {
    const categories = realm.objects('Category');
    const categoriesFiltered = categories.filtered('name == $0', category.name);

    if (categoriesFiltered.length > 0) {
      return 'Essa Categoria já existe';
    }
  }

  try {
    realm.write(() => {
      data = {
        id: category.id || getUUID(),
        name: category.name,
        color: category.color,
        isDebit: category.isDebit,
        isCredit: category.isCredit,
      };

      realm.create('Category', data, true);
      return data;
    });
  } catch (error) {
    console.error(`createCategories :: ERRO AO SALVAR categoria,
    ${JSON.stringify(error)}`);
  }
};

export const getAllCategories = async () => {
  const realm = await getRealm();
  return realm.objects('Category');
};

export const getDebitCategories = async () => {
  const realm = await getRealm();
  return realm
    .objects('Category')
    .filtered('isDebit = true AND isInit = false');
};

export const getCreditCategories = async () => {
  const realm = await getRealm();
  return realm
    .objects('Category')
    .filtered('isCredit = true AND isInit = false');
};

export const getInitCategories = async () => {
  const realm = await getRealm();
  return realm.objects('Category').filtered('isInit = true')['0'];
};

export const deleteCategory = async category => {
  const realm = await getRealm();

  const entries = realm
    .objects('Entry')
    .filtered('description == $0', category.name);

  try {
    realm.write(() => {
      entries.map(item => deleteEntries(item));
      realm.delete(category);
    });
  } catch (error) {
    throw {
      msg: `deleteCategory :: Erro ao remover categoria
    ${JSON.stringify(error)}`,
    };
  }
};
