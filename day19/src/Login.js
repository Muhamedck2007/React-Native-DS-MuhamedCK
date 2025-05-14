import React,{useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity,  ScrollView } from "react-native";

const Login = () => {
const handleLogin = async () => {
    try {

    const response = await fetch('https://dummyjson.com/auth/login', {
        method : 'POST',
        headers : {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username:username ,
            password: password,
       
        }),
        credentials:'omit',

    });

    const data = await response.json();
    console.log(data);

    if (data?.token) {
        navigator.navigate('Welcome', {
            username: data.username,
        });
    }
    
    }
catch (err) {
        console.error('Error:', error);
        alert('An error occurred while logging in.');
    }
};
return(
    <View style={styles.container}>
        <Text style={style.tittle}>Fake Api Login</Text>
        <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
        value={username}
        onChangeText={test => setUsername(test)}
        />

        <TextInput
        style={styles.input}
        placeholder="Password"
        autoCapitalize="none"
        value={password}
        onChangeText={test => setPasword(test)}
        />
        <Button tittle="Login" onPress={handle} />
    </View>
)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    tittle: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        borderColor: '#aaa',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10,
        padding: 10,
        marginBottom: 16,
    },
    error: {
        color: 'red',
        marginBottom: 16,
        textAlign: 'center',
    },
});


export default Login