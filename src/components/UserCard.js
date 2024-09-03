import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles';

const UserCard = ({user}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: user.avatar_url}} style={styles.image} />
      <Text style={styles.username}>{user.login}</Text>
    </View>
  );
};

export default UserCard;
