import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const ProductItem = ({
  title = 'No Title Available',
  description = 'No description provided.',
  price = 0,
  image = 'https://via.placeholder.com/150?text=No+Image',
  category = 'Unknown',
  inStock = false,
  rating = 0,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.productImage} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.category}>Category: {category}</Text>
      <Text style={styles.price}>₹{price}</Text>
      <Text style={styles.rating}>⭐ {rating} / 5</Text>
      <Text style={[styles.stock, { color: inStock ? 'green' : 'red' }]}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: 180,
    minHeight: 300,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#eee',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    textAlign: 'center',
  },
  description: {
    fontSize: 13,
    color: '#555',
    textAlign: 'center',
    marginBottom: 6,
  },
  category: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },
  rating: {
    fontSize: 13,
    marginBottom: 4,
  },
  stock: {
    fontSize: 13,
    fontWeight: '500',
  },
});
