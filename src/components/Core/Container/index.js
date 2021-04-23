import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Container = ({
  title,
  actionLabelText,
  actionButtonText,
  onPressActionButton,
  children,
}) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}

      {children}

      {(actionLabelText || actionButtonText) && (
        <View style={styles.actionContainer}>
          {actionLabelText && (
            <Text style={styles.actionLabel}>{actionLabelText}</Text>
          )}

          {actionButtonText && onPressActionButton && (
            <TouchableOpacity
              style={styles.actioinButton}
              onPress={onPressActionButton}>
              <Icon
                name="insert-chart"
                size={13}
                style={styles.actioinButtonIcon}
              />
              <Text style={styles.actioinButtonText}>{actionButtonText}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default Container;
