import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>Flat Card</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text >Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text >Green</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text >Blue</Text>
                </View>
            </View>
        </View>
    )
}

export default FlatCards

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
    },
    cardOne: {
        backgroundColor: '#F9564F',
    },
    cardTwo: {
        backgroundColor: '#47E5BC'
    },
    cardThree: {
        backgroundColor: '#01BAEF'
    },
    headingText: {
        fontSize:22,
        fontWeight:'bold',
    }
})