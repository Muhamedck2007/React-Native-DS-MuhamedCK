import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

const MenuScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the Profile App</Text>
            <Button title='Go to Person Profile'
                    onPress={()=> navigation.navigate('Person')}/>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        marginBottom: 20
    }

})

export default MenuScreen;