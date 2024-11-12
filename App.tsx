import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './android/components/FlatCards'
import ImageCards from './android/components/ImageCards'
import ElevatedCards from './android/components/ElevatedCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards/>
        <ElevatedCards/>
        <ImageCards/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  
})