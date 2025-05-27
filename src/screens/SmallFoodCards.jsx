import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

const SmallFoodCards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('https://ik.imagekit.io/sti8lrsqsa/data.json?updatedAt=1705155581559');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Fetch Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.foodName}</Text>
      <Text style={styles.rating}>⭐ {item.rating}</Text>
    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#000" />;
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10 }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
  width: 120,
  height: 160,
  marginRight: 15,
  marginVertical: 10,
  backgroundColor: '#fff',
  borderRadius: 12,
  overflow: 'hidden',
  elevation: 3,
},

  image: {
    width: '100%',
    height: 80,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    marginHorizontal: 5,
  },
  rating: {
    fontSize: 12,
    marginHorizontal: 5,
    color: 'gray',
  },
});



export default SmallFoodCards;
