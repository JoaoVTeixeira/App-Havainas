import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function ProductItem({ product, addToCart }) {
  return (
    <View style={styles.item}>
      <Image 
        style={styles.image}
        source={{ uri: 'https://via.placeholder.com/150' }} // Placeholder image URL
      />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(product)} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: '48%',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    color: '#888',
    marginVertical: 5,
    textAlign: 'center',
  },
});
