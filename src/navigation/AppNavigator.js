import React from 'react';
import {Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigationContainer} from '@react-navigation/native';

import UserSearchScreen from '../screens/UserSearchScreen';
import ReposSearchScreen from '../screens/RepoSearchScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="UserSearch"
          component={UserSearchScreen}
          options={{
            tabBarLabel: 'Users',
            tabBarIcon: () => (
              <Image
                source={require('../../src/assets/users.png')}
                style={{width: 24, height: 24}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ReposSearch"
          component={ReposSearchScreen}
          options={{
            tabBarLabel: 'Repos',
            tabBarIcon: () => (
              <Image
                source={require('../../src/assets/repos.png')}
                style={{width: 24, height: 24}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
