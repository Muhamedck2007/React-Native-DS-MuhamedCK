import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
mport {NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Info Personale</Text>
      <text>Emri:Muhamed</text>
      <text>Mbiemri:Cakaj</text>
      <text>Age: 17</text>
      <text>Birth date:26/09/2007</text>
      <text>School:Eqrem qabej</text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
  },
});
