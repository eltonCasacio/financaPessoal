import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../styles/Colors';

import {
  ActionPrimaryButton,
  ActionSecondaryButton,
} from '../../components/Core/ActionFooter';

import {createCategories} from '../../services/Categories';

const NewCategory = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [credit, setCredit] = React.useState(true);
  const [debit, setDebit] = React.useState(false);

  const randomColor = () => {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    return `rgb(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)})`;
  };

  const save = async () => {
    if (name.trim()) {
      let newCategory = {
        name: name,
        color: randomColor(),
        isCredit: credit,
        isDebit: debit,
      };

      try {
        await createCategories(newCategory);
        navigation.navigate('NewEntry');
      } catch (error) {
        console.error('NewCategory :: ERRO criar categoria');
      }
    }
  };

  const togleCreditFebit = () => {
    setCredit(!credit);
    setDebit(!debit);
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
            style={[styles.button, credit ? styles.buttonActived : '']}
            onPress={togleCreditFebit}>
            <Icon name="attach-money" size={30} color={Colors.white} />
            <Text style={styles.buttonText}>Credito</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, debit ? styles.buttonActived : '']}
            onPress={togleCreditFebit}>
            <Icon name="money-off" size={30} color={Colors.white} />
            <Text style={styles.buttonText}>Debito</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ActionPrimaryButton title="Adicionar" onPress={save} />
      <ActionSecondaryButton
        title="Cancelar"
        onPress={() => navigation.navigate('NewEntry')}
      />
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
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    padding: 20,

    color: Colors.white,
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: Colors.asphalt,
    width: 130,
    height: 60,
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
