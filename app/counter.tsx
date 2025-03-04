// app/apple.tsx
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import IncrementButton from './components/IncrementButton';
import DecrementButton from './components/DecrementButton';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);
  
    return (
      <View style={styles.container}>
        <Text style={styles.counterText}>Counter: {counter}</Text>
        <IncrementButton increment={increment} />
        <DecrementButton decrement={decrement} />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
  },
  
});

export default Counter;



