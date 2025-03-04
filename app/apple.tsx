// app/apple.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Apple = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apple</Text>
      <Image
         source={require('../assets/apple.png')}  
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default Apple;
