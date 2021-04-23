import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import LenearGradient from 'react-native-linear-gradient';

import useBalance from '../../hooks/useBalance';
import Colors from '../../styles/Colors';

import Currency from '../Core/Currency';

const BalanceLabel = () => {
  const [balance] = useBalance();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <LenearGradient
        style={styles.panel}
        colors={[Colors.blue, Colors.asphalt]}>
        <Text style={styles.value}>
          <Currency value={balance} />
        </Text>
      </LenearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: Colors.white,
  },
  value: {
    fontSize: 28,
    color: Colors.white,
  },
  panel: {
    minWidth: 80,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
});

export default BalanceLabel;
