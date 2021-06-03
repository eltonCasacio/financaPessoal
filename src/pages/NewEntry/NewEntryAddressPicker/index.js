import React from 'react';
import {Alert, View, TouchableOpacity, StyleSheet} from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';

const NewEntryAddressPicker = ({address, onChange}) => {
  const getLocation = (latitude, longitude) => {
    Geocoder.init('');

    Geocoder.from({latitude, longitude})
      .then(json => {
        const formattedAddress = json.results[0].formatted_address;
        Alert.alert('Localização', formattedAddress, [
          {text: 'Cancelar', style: 'cancel', onPress: () => {}},
          {
            text: 'Confirmar',
            onPress: () => {
              onChange({
                lat: latitude,
                lon: longitude,
                addr: formattedAddress,
              });
            },
          },
        ]);
      })
      .catch(error => {
        console.error(
          'NewEntryAddressPicker:: getLocation :: erro ao recuperar a localização',
          error,
        );
        Alert.alert('Erro ao verificar Localização');
      });
  };

  const getPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;

        getLocation(latitude, longitude);
      },
      error => {
        console.error(
          'NewEntryAddressPicker :: erro ao recuperar a posição',
          error,
        );
        Alert.alert('Erro ao verificar Posição');
      },
    );
  };

  const onButtonPress = () => {
    if (address) {
      Alert.alert('Localização', address, [
        {
          text: 'Apagar',
          onPress: () => {
            onChange({latitude: null, longitude: null, address: null});
          },
          style: 'cancel',
        },
        {text: 'Ok', onPress: () => console.log('Ok pressed')},
      ]);
    } else {
      getPosition();
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={[styles.button, address ? styles.buttonActived : '']}
        onPress={onButtonPress}>
        <Icon name="person-pin" size={30} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
    backgroundColor: Colors.asphalt,
    width: 59,
    height: 59,
    marginHorizontal: 3,
  },
  buttonActived: {
    backgroundColor: Colors.blue,
  },
});

export default NewEntryAddressPicker;
