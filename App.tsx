import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { ExpoRouter } from "expo-router";

export default ExpoRouter;


export function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Screen 1 Button Pressed")}>
          <Text style={styles.buttonText}>Screen 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Screen 2 Button Pressed")}>
          <Text style={styles.buttonText}>Screen 2</Text>
        </TouchableOpacity>
      </View>

      
      <TouchableOpacity style={styles.alertButton} onPress={() => Alert.alert("Alert", "Alert Button Pressed")}>
        <Text style={styles.buttonText}>Show Alert</Text>
      </TouchableOpacity>
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
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  alertButton: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#dc3545',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
