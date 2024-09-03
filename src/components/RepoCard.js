import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';

const RepoCard = ({repo}) => {
  return (
    <View style={styles.containerRepo}>
      <Text style={styles.titlRepo}>{repo.name}</Text>
      <Text style={styles.descriptionRepo}>{repo.description}</Text>
      <Text style={styles.starRepo}>⭐ {repo.stargazers_count}</Text>
    </View>
  );
};

export default RepoCard;
