import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const item = { ...product, quantity };
    navigation.navigate('Cart', { newItem: item });
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/400' }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.nome} - {product.codigo_estampa}</Text>
        <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
        <Text style={styles.description}>
          Gênero:{product.genero}

        </Text>
        {/* Temporário, remover depois */}
        <Text style={styles.description}>
          Marca:{product.marca}

        </Text>

        <View style={styles.quantityContainer}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={String(quantity)}
            onChangeText={(value) => setQuantity(Number(value))}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddToCart}
          >
            <Text style={styles.addButtonText}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: '#007BFF',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    width: 50,
    marginRight: 10,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ProductDetailScreen;
