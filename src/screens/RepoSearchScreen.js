import React, {useState, useContext} from 'react';
import {View, FlatList, Text} from 'react-native';
import {Context} from '../context/Context';

import SearchBar from '../components/SearchBar';
import RepoCard from '../components/RepoCard';

import styles from '../styles';

const RepoSearchScreen = () => {
  const {repos, searchRepos, loading} = useContext(Context);
  const [query, setQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    setHasSearched(true);
    searchRepos(query);
  };

  return (
    <View style={styles.containerRepoUser}>
      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
        searchType="repos"
      />
      {loading && <Text style={styles.loadingTextRepoUser}>Loading...</Text>}
      {!loading && !hasSearched && (
        <Text style={styles.message}>
          Please enter a search query to find repositories.
        </Text>
      )}
      {!loading && hasSearched && users.length === 0 && (
        <Text style={styles.message}>
          No repositories found. Please try a different search.
        </Text>
      )}
      <FlatList
        data={repos}
        keyExtractor={repo => repo.id.toString()}
        renderItem={({item}) => <RepoCard repo={item} />}
      />
    </View>
  );
};

export default RepoSearchScreen;
