import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native';

export default function ProductItem({ product, addToCart, navigation }) {
  const [quantity, setQuantity] = useState(1);
  const [showQuantity, setShowQuantity] = useState(false);

  const handleAddToCart = () => {
    setShowQuantity(true);
  };

  const handleConfirmAddToCart = () => {
    addToCart({ ...product, quantity });
    setShowQuantity(false);
    setQuantity(1);
  };

  const handleProductDetail = () => {
    navigation.navigate('ProductDetail', { product });
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={handleProductDetail} style={styles.imageContainer}>
        <Image 
          style={styles.image}
          source={{ uri: 'https://via.placeholder.com/150' }} 
        />
      </TouchableOpacity>
      <Text style={styles.name}>{product.nome}</Text>
      {/* <Text style={styles.price}>${product.price.toFixed(2)}</Text> */}
      <Text style={styles.price}>$25.0</Text>

      {!showQuantity ? (
        <View style={styles.buttonContainer}>
          <Button title="Adicionar ao Carrinho" onPress={handleAddToCart} />
        </View>
      ) : (
        <View style={styles.quantityContainer}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={String(quantity)}
            onChangeText={(value) => setQuantity(Number(value))}
          />
          <Button title="Confirmar" onPress={handleConfirmAddToCart} />
        </View>
      )}
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
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
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
  buttonContainer: {
    marginTop: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    width: 50,
    marginRight: 10,
    textAlign: 'center',
  },
});
