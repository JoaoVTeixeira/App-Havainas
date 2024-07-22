import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProductItem from './ProductItem';

export default function ProductList({ products, addToCart }) {
  return (
    <View style={styles.listContainer}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});