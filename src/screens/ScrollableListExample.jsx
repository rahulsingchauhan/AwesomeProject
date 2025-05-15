import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';

const data = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

const ScrollableListExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ScrollView Example</Text>
      <ScrollView style={styles.scrollContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text>{item}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.title}>FlatList Example</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        style={styles.scrollContainer}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  scrollContainer: {
    maxHeight: 200,
    marginBottom: 20,
  },
  item: {
    padding: 15,
    backgroundColor: '#CAF0F8',
    marginBottom: 5,
    borderRadius: 8,
  },
});

export default ScrollableListExample;
