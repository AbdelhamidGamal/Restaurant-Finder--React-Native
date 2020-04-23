import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import yelp from '../api/yelp';

const ResturantScreen = ({ navigation }) => {
  const [info, setInfo] = useState(null);

  const getResinfo = async () => {
    const res = await yelp.get(`/${navigation.getParam('id')}`);
    setInfo(res.data);
  };

  useEffect(() => {
    getResinfo();
  }, []);

  return info ? (
    <View>
      <Text style={styles.title}>{info.name}</Text>
      <ScrollView>
        {info.photos.map((photo) => (
          <Image style={styles.photo} source={{ uri: photo }} />
        ))}
      </ScrollView>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  photo: {
    width: 350,
    height: 350,
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default ResturantScreen;
