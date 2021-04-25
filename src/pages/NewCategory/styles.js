import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    backgroundColor: Colors.background,
  },
  input: {
    textAlign: 'center',
    backgroundColor: Colors.champagneDark,
    borderRadius: 15,
    padding: 20,

    color: Colors.background,
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  button: {
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.asphalt,
    width: 150,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
  },
  buttonActived: {
    backgroundColor: Colors.blue,
  },
  buttonActionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
