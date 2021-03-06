import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Svg, {Circle, Rect} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Currency from '../../Core/Currency';
import moment from '../../../vendors/moment';

import Colors from '../../../styles/Colors';
import {styles} from './styles';

const ListItem = ({entry, isFirstItem, isLastItem, onEntryPress}) => {
  const bulletLineY = 35;
  const bulletLineHeight = isLastItem ? 0 : 100;
  const showBulletLine = !(isFirstItem && isLastItem);
  const bulletColor = entry?.category?.color || Colors.white;

  return (
    <TouchableOpacity onPress={() => onEntryPress && onEntryPress(entry)}>
      <View style={styles.container}>
        <View style={styles.bullet}>
          <Svg height="200" width="30">
            {showBulletLine && (
              <Rect
                x="9"
                y={bulletLineY}
                width="2"
                height={bulletLineHeight}
                fill={Colors.background}
              />
            )}

            <Circle
              cx="10"
              cy="40"
              r={8}
              stroke={Colors.background}
              strokeWidth="1.5"
              fill={bulletColor}
            />
          </Svg>
        </View>

        <View style={styles.description}>
          <Text style={styles.descriptionText}>{entry.description}</Text>

          <View>
            <View style={styles.details}>
              <Icon style={styles.entryAtIcon} name="access-time" size={12} />
              <Text style={styles.entryAtText}>
                {moment(entry.entryAt).calendar()}
              </Text>
            </View>

            {entry.address && (
              <View style={styles.details}>
                <Icon style={styles.addressIcon} name="person-pin" size={12} />
                <Text style={styles.addressText}>{entry.address}</Text>
              </View>
            )}
          </View>
        </View>

        <View style={styles.amount}>
          <Text style={styles.amountText}>
            <Currency value={entry?.amount} />
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
