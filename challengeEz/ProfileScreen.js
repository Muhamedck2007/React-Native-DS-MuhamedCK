import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://your-image-url.com" }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Elaine Alvarez</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>salmanbutt@gmail.com</Text>

        <Text style={styles.label}>Graduation Date</Text>
        <Text style={styles.value}>Dec 2018</Text>

        <Text style={styles.label}>Degrees</Text>
        <Text style={styles.value}>Bachelors{"\n"}Masters{"\n"}Post Graduate{"\n"}PhD</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f0f0f0", padding: 20 },
  header: { alignItems: "center", backgroundColor: "#009688", padding: 20, borderRadius: 10 },
  profileImage: { width: 100, height: 100, borderRadius: 50 },
  name: { fontSize: 20, fontWeight: "bold", color: "white", marginTop: 10 },
  infoContainer: { marginTop: 20, backgroundColor: "white", padding: 20, borderRadius: 10 },
  label: { fontSize: 16, fontWeight: "bold", color: "#757575", marginTop: 10 },
  value: { fontSize: 16, color: "#333", marginBottom: 5 },
});

export default ProfileScreen;