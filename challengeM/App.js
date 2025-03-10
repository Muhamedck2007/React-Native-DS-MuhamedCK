import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './screens/ProfileScreen';
import MenuScreen from './screens/MenuScreen';
export default function App() {
  return (
   
   <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen 
            name="Menu" 
            component={MenuScreen} 
            options={{title: 'Main Menu'}}/>


          <Stack.Screen 
            name="Person" 
            component={ProfileScreenScreen} 
            options={{title: 'Person Profile'}}
          />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
