import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native';
import ProductList from './ProductList';

const products = [
  { id: '1', name: 'Havaiana Classic', price: 25.0 },
  { id: '2', name: 'Havaiana Slim', price: 30.0 },
  { id: '3', name: 'Havaiana Top', price: 20.0 },
  { id: '4', name: 'Havaiana Brasil', price: 35.0 },
  { id: '5', name: 'Havaiana Kids', price: 20.0 },
  { id: '6', name: 'Havaiana Urban', price: 40.0 },
  { id: '7', name: 'Havaiana Trend', price: 28.0 },
  { id: '8', name: 'Havaiana Fun', price: 22.0 },
  { id: '9', name: 'Havaiana Summer', price: 26.0 },
  { id: '10', name: 'Havaiana Beach', price: 30.0 },
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Loja de Havaianas</Text>
        </View>
        <ProductList products={products} addToCart={addToCart} />
        <View style={styles.cartContainer}>
          <Text style={styles.cartHeader}>Carrinho:</Text>
          {cart.map((item, index) => (
            <Text key={index} style={styles.cartItem}>{item.name} - ${item.price}</Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  cartContainer: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  cartHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  cartItem: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
});
