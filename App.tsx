import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default function App(): JSX.Element {
  useEffect(() => {
    const requestGet = async () => {
      try {
        const response = await axios.get('https://47e4ff49-58f3-4ed5-b1dd-4089300a86aa.mock.pstmn.io/reprocessed-issue');
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    requestGet();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
