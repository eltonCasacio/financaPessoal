import React from 'react';
import {FlatList} from 'react-native';

import ListItem from './ListItem';

const List = ({data}) => {
  return (
    <FlatList
      accessibilityLabel="Lista dos últimos lançamentos"
      data={data}
      keyExtractor={item => item.category.id}
      renderItem={({item}) => <ListItem entry={item} />}
    />
  );
};

export default List;
