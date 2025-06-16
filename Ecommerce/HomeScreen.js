import React from 'react';
import { FlatList, StyleSheet, SafeAreaView } from 'react-native';
import ProductItem from './ProductItem';
import products from './Products';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
            category={item.category}
            inStock={item.inStock}
            rating={item.rating}
          />
        )}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 10,
    alignItems: 'center',
  },
});
