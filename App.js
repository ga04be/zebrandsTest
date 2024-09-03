import React from 'react';
import { Provider } from './src/context/Context';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <Provider>
      <AppNavigator />
    </Provider>
  );
};

export default App;
