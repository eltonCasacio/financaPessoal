import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.background,
  },
  formActionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  formContainer: {
    flex: 1,
    paddingVertical: 20,
  },
});
