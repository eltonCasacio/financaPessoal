import {StyleSheet} from 'react-native';
import Colors from '../../../styles/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingVertical: 10,
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryButton: {
    borderRadius: 150,
    borderWidth: 1,
    borderColor: Colors.green,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  primaryButtonText: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.green,
  },
  secondaryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  secondaryButtonText: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.white,
  },
  createButton: {
    borderRadius: 150,
    borderWidth: 1,
    borderColor: Colors.blue,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  createButtonText: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.blue,
  },
  dangerButtonText: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.red,
  },
  dangerButton: {
    borderRadius: 150,
    borderWidth: 1,
    borderColor: Colors.red,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
});
