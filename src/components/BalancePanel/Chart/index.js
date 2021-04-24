import React from 'react';
import {View, StyleSheet} from 'react-native';

import {AreaChart} from 'react-native-svg-charts';
import useBalanceSumByDate from '../../../hooks/useBalanceSumByDate';

const BalancePanelChart = () => {
  const [balanceSum] = useBalanceSumByDate();

  let total = 0;
  if (balanceSum.length > 0) {
    total = balanceSum.reduce((sum, value) => sum + value);
  }
  const fillColor = total < 0 ? 'rgba(250,0,0, .07)' : 'rgba(0,250,0, .07)';
  const strokeColor = total < 0 ? 'rgba(250,0,0, .2)' : 'rgba(0,250,0, .2)';

  return (
    <View style={styles.container}>
      <AreaChart
        style={styles.chart}
        data={balanceSum}
        svg={{
          fill: fillColor,
          stroke: strokeColor,
          strokeWidth: 1,
        }}
        contentInset={{top: 0, bottom: 0}}
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
