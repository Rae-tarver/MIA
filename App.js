// App.js
import React from 'react';
import { View, Text } from 'react-native';
import IphoneProMax from './IphoneProMax';
import styles from './style'; // Import styles from the external stylesheet

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello from App!</Text>
      <IphoneProMax />
    </View>
  );
};

export default App;
