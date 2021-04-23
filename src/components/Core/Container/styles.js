import {StyleSheet} from 'react-native';
import Colors from '../../../styles/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.asphalt,
    margin: 5,
    padding: 8,

    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  title: {
    fontSize: 12,
    color: Colors.white,
    marginBottom: 5,
  },
  actionContainer: {
    flexDirection: 'row',
  },
  actionLabel: {
    flex: 1,
    fontSize: 12,
    color: Colors.white,
  },
  actioinButton: {
    flexDirection: 'row',
  },
  actioinButtonIcon: {
    color: Colors.white,
    marginTop: 2,
    marginRight: 1,
  },
  actioinButtonText: {
    color: Colors.white,
    fontSize: 12,
  },
});
