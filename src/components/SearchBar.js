import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import styles from '../styles';

const SearchBar = ({query, setQuery, onSearch, searchType}) => {
  return (
    <View style={styles.containerSearch}>
      <TextInput
        style={styles.inputSearch}
        placeholder={`Search ${
          searchType === 'repos' ? 'repositories' : 'users'
        }...`}
        value={query}
        onChangeText={setQuery}
      />
      {/* <Button title="Search" onPress={onSearch} /> */}
      <TouchableOpacity style={styles.buttonSearch} onPress={onSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
