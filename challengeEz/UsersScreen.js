import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";

const UsersScreen = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from API
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  // Render each user item
  const renderItem = ({ item }) => (
    <View style={styles.userCard}>
      <View style={styles.leftBox}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.middleBox}>
        <Text style={styles.email}>{item.email}</Text>
      </View>
      <View style={styles.rightBox}>
        <Text style={styles.id}>ID: {item.id}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f4f4", padding: 10 },
  userCard: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 3,
  },
  leftBox: { flex: 2 },
  middleBox: { flex: 3 },
  rightBox: { flex: 1, alignItems: "flex-end" },
  name: { fontSize: 16, fontWeight: "bold", color: "#333" },
  email: { fontSize: 14, color: "#555" },
  id: { fontSize: 14, fontWeight: "bold", color: "#007BFF" },
});

export default UsersScreen;