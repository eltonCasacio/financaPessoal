import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import {styles} from './styles';

const ActionFooter = ({children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>{children}</View>
    </View>
  );
};

export const ActionPrimaryButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
      <Text style={styles.primaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const ActionSecondaryButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.secondaryButton} onPress={onPress}>
      <Text style={styles.secondaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const ActionDefaultButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.createButton} onPress={onPress}>
      <Text style={styles.createButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const ActionDangerButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.dangerButton} onPress={onPress}>
      <Text style={styles.dangerButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionFooter;
