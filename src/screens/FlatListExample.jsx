import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator } from 'react-native';

const FlatListExample = () => {
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = 'https://ik.imagekit.io/sti8lrsqsa/data.json?updatedAt=1705155581559';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();
        setFoodData(json); // Assuming API returns array of such objects
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.foodName}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.info}>💰 ${item.price}   ⏱ {item.time} mins   ⭐ {item.rating}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#ff6347" />
      </View>
    );
  }

  return (
    <FlatList
      data={foodData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginHorizontal: 10,
  },
  info: {
    fontSize: 14,
    margin: 10,
    color: '#333',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FlatListExample;
