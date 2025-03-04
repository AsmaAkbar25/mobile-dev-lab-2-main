// app/orange.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Orange = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orange</Text>
      <Image
        source={require('../assets/orange.png')}  
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

export default Orange;
