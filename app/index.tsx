// app/index.tsx
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
import ListComponent from './components/ListComponent';

export default function Index() {
  const router = useRouter(); // Hook for navigation

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Fruit App!</Text>
      
      {/* List of Fruits */}
      <ListComponent />
      
      
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});
