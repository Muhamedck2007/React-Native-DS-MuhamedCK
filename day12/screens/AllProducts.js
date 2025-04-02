import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json()) 
            .then(data => {
                setProducts(data);
            })
            .catch(error => console.error('Error fetching data:', error)); 
    }, []);

    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
                return (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>{item.title}</Text>
                    </View>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AllProducts;