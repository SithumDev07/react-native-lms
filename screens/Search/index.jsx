import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../constants'

const Search = () => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            ...FONTS.h1,
            color: COLORS.primDark
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Search</Text>
        </View>
    )
}

export default Search