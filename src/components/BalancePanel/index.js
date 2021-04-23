import React from 'react';
import {View, TouchableOpacity, StatusBar, StyleSheet} from 'react-native';

import LenearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Label from './Label';
import Chart from './Chart';
import useBalance from '../../hooks/useBalance';

const BalancePanel = ({onNewEntryPress}) => {
  const [balance] = useBalance();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.blue} />
      <LenearGradient
        colors={[Colors.blue, Colors.asphalt]}
        style={styles.panel}>
        <Label currentBalance={balance} />
        <Chart />
      </LenearGradient>
      <TouchableOpacity style={styles.button} onPress={onNewEntryPress}>
        <Icon name="add" size={30} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: -27,
  },
  panel: {
    paddingVertical: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',

    marginTop: -25,
    marginRight: 10,

    backgroundColor: Colors.green,
    borderRadius: 100,
    width: 50,
    height: 50,

    shadowColor: Colors.black,
    elevation: 5,
  },
});

export default BalancePanel;
