import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'

const FeaturedButton = ({ title, callBackHandler }) => {

    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: SIZES.padding,
            paddingVertical: SIZES.radius,
            position: 'absolute',
            bottom: SIZES.padding * .1,
        },
        title: {
            color: COLORS.gray10,
            ...FONTS.h3
        },
        touchableOpacity: {
            backgroundColor: COLORS.primDark,
            borderRadius: SIZES.width / 2,
            height: SIZES.height * 0.0875,
            alignItems: 'center',
            justifyContent: 'center',
            width: SIZES.width * 0.875,
        }
    })

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchableOpacity} onPress={callBackHandler}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FeaturedButton