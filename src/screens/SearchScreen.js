import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ListByPrice from '../components/ListByPrice';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchAPI, error, results] = useResults();

  const filterResults = (price) => {
    return results.filter((i) => i.price === price);
  };
  return (
    <View style={Styles.main}>
      <SearchBar
        text={term}
        setText={setTerm}
        finishedEditing={() => searchAPI(term)}
      />
      {error ? <Text>{error}</Text> : null}

      <View style={Styles.lists}>
        <ScrollView>
          <ListByPrice name='Cost Effective' list={filterResults('$')} />
          <ListByPrice name='Bit Pricer' list={filterResults('$$')} />
          <ListByPrice name='Big Spender!' list={filterResults('$$$')} />
          <ListByPrice name='Ultra Spender' list={filterResults('$$$$')} />
        </ScrollView>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: 30,
  },
  lists: {
    margin: 15,
  },
});

export default SearchScreen;
