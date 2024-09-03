import React, {useState, useContext} from 'react';
import {View, FlatList, Text} from 'react-native';

import {Context} from '../context/Context';

import SearchBar from '../components/SearchBar';
import UserCard from '../components/UserCard';

import styles from '../styles';

const UserSearchScreen = () => {
  const {users, searchUsers, loading} = useContext(Context);
  const [query, setQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    setHasSearched(true);
    searchUsers(query);
  };

  return (
    <View style={styles.containerRepoUser}>
      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
        searchType="users"
      />
      {loading && <Text style={styles.loadingTextRepoUser}>Loading...</Text>}
      {!loading && !hasSearched && (
        <Text style={styles.message}>
          Please enter a search query to find users.
        </Text>
      )}
      {!loading && hasSearched && users.length === 0 && (
        <Text style={styles.message}>
          No users found. Please try a different search.
        </Text>
      )}
      <FlatList
        data={users}
        keyExtractor={user => user.id.toString()}
        renderItem={({item}) => <UserCard user={item} />}
      />
    </View>
  );
};

export default UserSearchScreen;
