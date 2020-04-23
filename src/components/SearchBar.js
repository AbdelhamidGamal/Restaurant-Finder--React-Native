import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SeachBar = ({ text, setText, finishedEditing }) => {
  return (
    <View style={Styles.main}>
      <Icon name='search' size={30} color='black' />
      <TextInput
        style={Styles.input}
        value={text}
        onChangeText={(text) => setText(text)}
        placeholder='Search'
        onEndEditing={finishedEditing}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 10,
    padding: 10,
    backgroundColor: '#F0EEEE',
    borderRadius: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    fontSize: 18,
  },
});

export default SeachBar;
