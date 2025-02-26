import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

function App() {
const [odd, setOdd]= useState('1');
const [even, setEven]= useState('2');

return (
  <View>
	<View style={{ textAlign: 'center', marginTop: 50 }}></View>
	<Button title="Odd Numbers" onPress={() => setOdd(parseInt(odd) + 2)} />
	<Text>{odd}</Text>
	<Button title="Even Numbers" onPress={() => setEven(parseInt(even) + 2)} />
	<Text>{even}</Text>
  </View>
);

}
export default App;
