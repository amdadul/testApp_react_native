import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.elevatedCard}>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text >Red</Text>
          </View>
          <View style={styles.card}>
            <Text >Green</Text>
          </View>
          <View style={styles.card}>
            <Text >Blue</Text>
          </View>
          <View style={styles.card}>
            <Text >yellow</Text>
          </View>
          <View style={styles.card}>
            <Text >Magenta</Text>
          </View>
          <View style={styles.card}>
            <Text >Cyan</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    margin: 8,
    borderRadius: 5,
    backgroundColor: 'lightgray'
  },
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  elevatedCard:{
    //elevation:1,
  }
})