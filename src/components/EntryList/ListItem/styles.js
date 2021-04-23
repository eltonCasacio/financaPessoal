import {StyleSheet} from 'react-native';
import Colors from '../../../styles/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 100,
    maxHeight: 100,
  },
  bullet: {},
  description: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  descriptionText: {
    fontSize: 14,
    color: Colors.white,
  },
  amount: {
    justifyContent: 'flex-start',
  },
  amountText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.white,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  entryAtIcon: {color: Colors.metal, marginRight: 2},
  entryAtText: {color: Colors.metal, fontSize: 12},
  addressIcon: {
    alignSelf: 'flex-start',
    color: Colors.metal,
    marginRight: 2,
    marginTop: 3,
  },
  addressText: {color: Colors.metal, fontSize: 12},
});
