import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ItemCard from './ItemCard';
import { withNavigation } from 'react-navigation';

const ListByPrice = ({ name, list, navigation }) => {
  return (
    <View style={styles.list}>
      {list.length > 0 ? <Text style={styles.title}>{name}</Text> : null}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={list}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Resturant', { id: item.id })}
          >
            <ItemCard item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  list: {
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 2,
  },
});

export default withNavigation(ListByPrice);
