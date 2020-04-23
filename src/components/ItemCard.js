import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ItemCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.img} source={{ uri: item.image_url }} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.reviews}>
        {item.rating} Stars, {item.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 250,
    height: 120,
  },
  card: {
    marginRight: 10,
  },
  name: { fontWeight: '700', marginTop: 5 },
  reviews: { color: 'lightgray' },
});

export default ItemCard;
