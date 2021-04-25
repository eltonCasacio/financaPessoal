import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../styles/Colors';

import {
  ActionPrimaryButton,
  ActionSecondaryButton,
} from '../../components/Core/ActionFooter';

import {createCategories} from '../../services/Categories';
import {randomColor} from '../../utils';

const NewCategory = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [isCredit, setIsCredit] = React.useState(true);
  const [isDebit, setIsDebit] = React.useState(false);

  const save = async () => {
    if (name.trim()) {
      const color = randomColor();
      try {
        await createCategories({name, color, isCredit, isDebit});
        navigation.navigate('NewEntry');
      } catch (error) {
        Alert.alert('Não foi possivel criar categoria');
        console.error('NewCategory :: ERRO criar categoria');
      }
    }
  };

  const editCategory = async () => {};

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

      <View style={styles.buttonContainer}>
        <ActionPrimaryButton title="Adicionar" onPress={save} />
        <ActionSecondaryButton
          title="Cancelar"
          onPress={() => navigation.navigate('NewEntry')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    backgroundColor: Colors.background,
  },
  input: {
    textAlign: 'center',
    backgroundColor: Colors.champagneDark,
    borderRadius: 15,
    padding: 20,

    color: Colors.background,
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.asphalt,
    width: 150,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
  },
  buttonActived: {
    backgroundColor: Colors.blue,
  },
});

export default NewCategory;
