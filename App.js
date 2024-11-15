import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, SectionList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const Data = [
  {
    title: 'Enhypen', color: 'red',
    data: [
      { name: 'Niki kbs pc : $15', cardImage: 'https://i.pinimg.com/736x/05/cc/c6/05ccc6d0b87f9b476dfb047c0f2742d4.jpg' },
      { name: 'Sunoo makestar pc :$20', cardImage: 'https://i.pinimg.com/736x/d7/2f/9f/d72f9f17e7bdb99db7ef149c80269904.jpg'},
    ],
  },
  {
    title: 'Artms', color: 'purple',
    data: [
      { name: 'Kim Lip withmuu pc :$17', cardImage: 'https://i.pinimg.com/736x/48/3a/e5/483ae52c7d9c5fc6a0b6170ef6d919c2.jpg'},
      { name: 'Heejin everline pc :$15', cardImage: 'https://i.pinimg.com/736x/6e/6a/1a/6e6a1a889e32192a9fd795fd55bfeb43.jpg'},
    ],
  },
  {
    title: 'Riize', color: 'skyblue',
    data: [
      { name: 'Anton soundcheck pc :$16', cardImage: 'https://i.pinimg.com/736x/0a/f1/b8/0af1b80fe3bc66a5c1c5c1340108ebd5.jpg'},
      { name: 'Wonbin season greetings pc :$20', cardImage: 'https://i.pinimg.com/736x/47/ed/da/47edda20f2e97da4d3be096c620c7629.jpg'},
    ],
  },
];

const render = ({ item }) => (
    <TouchableOpacity style={styles.cardItem}>
      <Text style={styles.cardName}>{item.name}</Text>
      <Image source={{ uri: item.cardImage }} style={styles.cardImage} />
    </TouchableOpacity>
);

function App() {
  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.buttonContainer}>
          <Button title="Add to cart" color="#FF6347" />
        </View>
        <SectionList
            sections={Data}
            keyExtractor={(item, index) => item.name + index}
            renderItem={render}
            renderSectionHeader={({ section }) => (
                <View style={[styles.header, { backgroundColor: section.color }]}>
                  <Text style={styles.headerText}>{section.title}</Text>
                </View>
            )}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
    paddingHorizontal: 10,
  },

  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  header: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
  },

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },

  cardName: {
    flex: 1,
    fontSize: 16,
    color: '#F5F5F5',
    marginRight: 10,
  },

  cardImage: {
    width: 80,
    height: 120,
    borderRadius: 5,
  },
});

export default App;



