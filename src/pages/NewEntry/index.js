import React, {useState} from 'react';
import {View} from 'react-native';

import {styles} from './styles';

import ActionFooter, {
  ActionPrimaryButton,
  ActionSecondaryButton,
  ActionDefaultButton,
} from '../../components/Core/ActionFooter';
import BalanceLabel from '../../components/BalanceLabel';

import NewEntryInput from './NewEntryInput';
import NewEntryCategoryPicker from './NewEntryCategoryPicker';
import NewEntryDatePicker from './NewEntryDatePicker';
import NewEntryAddressPicker from './NewEntryAddressPicker';
import NewEntryDeleteAction from './NewEntryDeleteAction';
import NewEntryCameraPicker from './NewEntryCameraPicker';

import useEntries from '../../hooks/useEntries';

const NewEntry = ({navigation}) => {
  const entry = navigation.getParam('entry', {
    id: null,
    amount: 0,
    category: {id: null, name: 'Selecione'},
    entryAt: new Date(),
    photo: null,
    address: null,
    latitude: null,
    longitude: null,
  });

  const [, saveEntry, deleteEntry] = useEntries();

  const [debit, setDebit] = useState(entry.amount <= 0);
  const [amount, setAmount] = useState(entry.amount);
  const [category, setCategory] = useState(entry.category);
  const [entryAt, setEntryAt] = useState(entry.entryAt);
  const [photo, setPhoto] = useState(entry.photo);
  const [address, setAddress] = useState(entry.address);
  const [longitude, setLongitude] = useState(entry.longitude);
  const [latitude, setLatitude] = useState(entry.latitude);

  const goBack = () => navigation.goBack();

  const isValid = () => {
    return parseFloat(amount) !== 0;
  };

  const save = () => {
    const data = {
      amount: parseFloat(amount),
      category: category,
      entryAt: entryAt,
      photo: photo,
      address: address,
      latitude: latitude,
      longitude: longitude,
    };

    saveEntry(data, entry);
    goBack();
  };

  const remove = async () => {
    deleteEntry(entry);
    goBack();
  };

  const handleNewCategory = () => {
    navigation.navigate('NewCategory');
  };

  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View style={styles.formContainer}>
        <NewEntryInput
          value={amount}
          onChangeValue={setAmount}
          onChangeDebit={setDebit}
        />
        <NewEntryCategoryPicker
          debit={debit}
          category={category}
          onChangeCategory={setCategory}
        />

        <View style={styles.formActionContainer}>
          <NewEntryDatePicker value={entryAt} onChange={setEntryAt} />
          <NewEntryCameraPicker photo={photo} onChangePhoto={setPhoto} />
          <NewEntryAddressPicker
            address={address}
            onChange={({lat, lon, addr}) => {
              setLatitude(lat);
              setLongitude(lon);
              setAddress(addr);
            }}
          />
          <NewEntryDeleteAction entry={entry} onOkPress={remove} />
        </View>
      </View>

      <View style={styles.footer}>
        <ActionFooter>
          <ActionPrimaryButton
            title={entry.id ? 'Salvar' : 'Adicionar'}
            onPress={() => isValid() && save()}
          />
          <ActionSecondaryButton title="Cancelar" onPress={goBack} />
        </ActionFooter>
        <ActionDefaultButton
          title="Criar Categoria"
          onPress={handleNewCategory}
        />
      </View>
    </View>
  );
};

export default NewEntry;
