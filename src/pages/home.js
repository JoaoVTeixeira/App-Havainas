import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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

const Home = ({ navigation }) => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Loja de Havaianas</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Icon name="person-add" size={24} color="#004D40" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cart', { cart })}>
            <Icon name="shopping-cart" size={24} color="#004D40" style={styles.cartIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar produtos..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <ScrollView style={styles.container}>
        <ProductList
          products={filteredProducts}
          addToCart={addToCart}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartIcon: {
    marginLeft: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 20,
    backgroundColor: '#fff',
  },
});

export default Home;
