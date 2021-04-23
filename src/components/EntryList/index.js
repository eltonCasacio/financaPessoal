import React from 'react';
import {FlatList} from 'react-native';

import ListItem from './ListItem';
import Container from '../Core/Container';

import useEntries from '../../hooks/useEntries';

const EntryList = ({days = 7, category, onEntryPress, onPressActionButton}) => {
  const [entries] = useEntries(days, category);

  return (
    <Container
      title="Ultimos lançamentos"
      actionLabelText={`Últimos ${days} dias`}
      actionButtonText="Ver mais"
      onPressActionButton={onPressActionButton}>
      <FlatList
        accessibilityLabel="Lista dos últimos lançamentos"
        data={entries}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <ListItem
            entry={item}
            isFirstItem={index === 0}
            isLastItem={index === entries.length - 1}
            onEntryPress={onEntryPress}
          />
        )}
      />
    </Container>
  );
};

export default EntryList;
