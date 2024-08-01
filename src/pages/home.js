import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
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

const HomeScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'menu', title: 'Menu', icon: 'menu' },
  ]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const renderScene = BottomNavigation.SceneMap({
    home: () => (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Loja de Havaianas</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Icon name="person-add" size={24} color="#004D40" />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.container}>
          <ProductList products={products} addToCart={addToCart} />
          <View style={styles.cartContainer}>
            <Text style={styles.cartHeader}>Carrinho:</Text>
            {cart.map((item, index) => (
              <Text key={index} style={styles.cartItem}>{item.name} - ${item.price}</Text>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    ),
    menu: () => (
      <View style={styles.scene}>
        <Text>Menu</Text>
      </View>
    ),
  });

  return (
    <View style={styles.container}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        renderIcon={({ route, color }) => {
          let iconName;
          if (route.key === 'home') {
            iconName = 'home';
          } else if (route.key === 'menu') {
            iconName = 'menu';
          }
          return <Icon name={iconName} size={24} color={color} />;
        }}
        barStyle={styles.bar}
      />
    </View>
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
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bar: {
    backgroundColor: '#fff',
    elevation: 0, // Remove sombra
  },
});

export default HomeScreen;
