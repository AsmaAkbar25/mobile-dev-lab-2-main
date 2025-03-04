import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import vacationDestinations from "../constants/list_items"; 

const Lab4 = () => {
  // State to keep track of selected destinations
  const [selectedDestinations, setSelectedDestinations] = useState<number[]>([]);

  // Function to handle selection toggle
  const toggleSelection = (id: number) => {
    setSelectedDestinations((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((destId) => destId !== id) // Remove if already selected
        : [...prevSelected, id] // Add if not selected
    );
  };

  return (
    <View style={styles.container}>
      {/* Page Title */}
      <Text style={styles.title}>Choose the destinations you would like a quote for</Text>

      {/* List of vacation destinations */}
      <FlatList
        data={vacationDestinations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={[
              styles.destinationItem,
              selectedDestinations.includes(item.id) && styles.selectedItem
            ]}
            onPress={() => toggleSelection(item.id)}
          >
            <Text style={styles.destinationText}>
              {item.location} - ${item.price} - {item.average_yearly_temperature}
            </Text>
            <Text>{selectedDestinations.includes(item.id) ? "✅" : "❌"}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  destinationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
  },
  selectedItem: {
    backgroundColor: "#d1ffd1", // Light green background for selected items
  },
  destinationText: {
    fontSize: 16,
  },
});

export default Lab4;
