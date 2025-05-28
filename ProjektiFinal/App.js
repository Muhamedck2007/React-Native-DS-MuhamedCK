import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Button,
} from "react-native";
import { Picker } from "@react-native-picker/picker"; // <- use this version for better compatibility
import axios from "axios";

export default function App() {
  const [joke, setJoke] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCategories();
    fetchJoke();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchJoke = async (category = '') => {
    setLoading(true);
    try {
      const url = category
        ? `https://api.chucknorris.io/jokes/random?category=${category}`
        : 'https://api.chucknorris.io/jokes/random';
      const response = await axios.get(url);
      setJoke(response.data.value);
    } catch (error) {
      console.error('Error fetching joke:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Chuck Norris Joke Generator</Text>

      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => {
          setSelectedCategory(itemValue);
          fetchJoke(itemValue);
        }}
        style={styles.picker}
      >
        <Picker.Item label="All Categories" value="" />
        {categories.map((category) => (
          <Picker.Item label={category} value={category} key={category} />
        ))}
      </Picker>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Text style={styles.joke}>{joke}</Text>
      )}

      <Button title="Get New Joke" onPress={() => fetchJoke(selectedCategory)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  picker: {
    height: 50,
    marginBottom: 20,
  },
  joke: {
    fontSize: 18,
    marginVertical: 20,
    textAlign: 'center',
  },
});