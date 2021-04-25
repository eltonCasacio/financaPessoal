import React from 'react';
import {View, StyleSheet} from 'react-native';

import {AreaChart} from 'react-native-svg-charts';
import useBalanceSumByDate from '../../../hooks/useBalanceSumByDate';

const BalancePanelChart = () => {
  const [balanceSum] = useBalanceSumByDate();

  console.log('BalancePanelChart :: ', balanceSum);
  return (
    <View style={styles.container}>
      <AreaChart
        style={styles.chart}
        data={balanceSum}
        contentInset={{top: 0, bottom: 0}}
        svg={{
          fill: 'rgba(0,0,0, .05)',
          stroke: 'rgba(0,0,0, .1)',
          strokeWidth: 1,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -20,
    marginBottom: 3,
  },
  chart: {
    height: 60,
  },
});

export default BalancePanelChart;
