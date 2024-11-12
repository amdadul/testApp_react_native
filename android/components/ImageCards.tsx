import { Image, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const ImageCards = () => {

  const handlePress = () => {
    Linking.openURL('https://www.google.com/search?q=fairy+lights'); // Replace with your target URL
  };

  return (
    <View>
      <Text style={styles.headingText}>Image Cards</Text>
      <View style={styles.card}>
        <Image source={{ uri: 'http://dummy-images.com/abstract/dummy-480x270-FairyLights.jpg' }}
          style={styles.cardImage} />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Dummy Image Title</Text>
          <Text style={styles.cardLabel}>Today</Text>
          <Text style={styles.cardBodyText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam doloribus tempore ad alias! Dignissimos nisi iste, nulla error modi enim, quisquam itaque ipsa provident recusandae ab optio nostrum quas quo!</Text>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cardButton} onPress={handlePress}>
            <Text style={styles.buttonText}>Explore ...</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ImageCards

const styles = StyleSheet.create({
  card: {
    height: 350,
    margin: 8,
    borderRadius: 15,
    backgroundColor: 'lightblue',

  },
  cardImage: {
    height: 140,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardBody: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'flex-end',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 3,
  },
  cardLabel: {
    fontSize: 14,
    color: '#827b7a',
  },
  cardBodyText: {
    fontSize: 16,
    paddingTop: 6,
  },
  cardButton: {
    justifyContent:'center',
    borderRadius: 10,
    height: 30,
    width: 100,
    backgroundColor: '#044e80',
    color: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
})