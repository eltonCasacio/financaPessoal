import React from 'react';
import {View} from 'react-native';

import {StyleSheet} from 'react-native';

import List from './List';
import Chart from './Chart';
import Container from '../Core/Container';

import useBalanceSumByCategory from '../../hooks/useBalanceSumByCategory';

const EntrySummery = ({days = 7, onPressActionButton}) => {
  const [balanceSum] = useBalanceSumByCategory(days);
  return (
    <Container
      title="Categorias"
      actionLabelText={`Últimos ${days} dias`}
      actionButtonText="Ver mais"
      onPressActionButton={onPressActionButton}>
      <View style={styles.inner}>
        <Chart data={balanceSum} />
        <List data={balanceSum} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  inner: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
});
export default EntrySummery;
