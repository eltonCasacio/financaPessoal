import React, {useState} from 'react';

import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../styles/Colors';
import {styles} from './styles';

import {createCategories, deleteCategory} from '../../services/Categories';
import {randomColor} from '../../utils';

import {
  ActionPrimaryButton,
  ActionDefaultButton,
  ActionDangerButton,
} from '../../components/Core/ActionFooter';

import NewEntryCategoryPicker from '../NewEntry/NewEntryCategoryPicker';

const NewCategory = ({navigation}) => {
  const [id, setId] = useState(null);
  const [name, setName] = useState('');
  const [color, setColor] = useState();
  const [isCredit, setIsCredit] = useState(true);
  const [isDebit, setIsDebit] = useState(false);

  const [category, setCategory] = useState({id: null, name: 'Selecione'});

  const onSave = async () => {
    if (name.trim()) {
      setColor(randomColor());

      try {
        await createCategories({id, name, color, isCredit, isDebit});
        navigation.navigate('NewEntry');
      } catch (error) {
        Alert.alert('Não foi possivel criar categoria');
        console.error('NewCategory :: ERRO criar categoria');
      }
    }
  };

  const onDelete = async () => {
    if (category.id) {
      deleteCategory(category);
      navigation.navigate('NewEntry');
    }
  };

  const onChangeCategory = async value => {
    setCategory(value);
    setId(value.id);
    setName(value.name);
    setColor(value.color);
    setIsCredit(value.isCredit);
    setIsDebit(value.isDebit);
  };

  const togleCreditFebit = () => {
    setIsCredit(!isCredit);
    setIsDebit(!isDebit);
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="name da categoria"
          onChangeText={text => setName(text)}
          value={name}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, isCredit ? styles.buttonActived : '']}
            onPress={togleCreditFebit}>
            <Icon name="attach-money" size={30} color={Colors.white} />
            <Text style={styles.buttonText}>Credito</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, isDebit ? styles.buttonActived : '']}
            onPress={togleCreditFebit}>
            <Icon name="money-off" size={30} color={Colors.white} />
            <Text style={styles.buttonText}>Debito</Text>
          </TouchableOpacity>
        </View>
      </View>

      <NewEntryCategoryPicker
        category={category}
        debit={isDebit}
        onChangeCategory={onChangeCategory}
      />

      <View style={styles.buttonActionContainer}>
        <ActionPrimaryButton title="Adicionar" onPress={onSave} />
        <ActionDefaultButton
          title="Cancelar"
          onPress={() => navigation.navigate('NewEntry')}
        />
        <ActionDangerButton title="Excluir" onPress={onDelete} />
      </View>
    </View>
  );
};

export default NewCategory;
