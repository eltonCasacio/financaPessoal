/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Currency from '../../Core/Currency';
import Colors from '../../../styles/Colors';

const Label = ({currentBalance}) => {
  let colorBalance = Colors.white;
  colorBalance = currentBalance < 0 ? Colors.red : colorBalance;
  colorBalance = currentBalance > 0 ? Colors.green : colorBalance;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>SALDO</Text>
      <Text style={{color: colorBalance, fontSize: 36}}>
        <Currency value={currentBalance} />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    zIndex: 1,
  },
  label: {
    fontSize: 14,
    color: Colors.white,
  },
});

export default Label;
