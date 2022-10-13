import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'
import { LinearGradient } from 'expo-linear-gradient'

const FeaturedButton = ({ title, callBackHandler }) => {

    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: SIZES.padding,
            paddingVertical: SIZES.radius,
            position: 'absolute',
            bottom: 0,
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
        },
        background: {
            width: SIZES.width,
            position: 'absolute',
            zIndex: -1,
            left: 0,
            right: 0,
            bottom: 0,
            height: '140%',
        }
    })

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchableOpacity} onPress={callBackHandler}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
            <LinearGradient
                // Background Linear Gradient
                // colors={['transparent', COLORS.primary]}
                colors={['transparent', COLORS.gray10]}
                locations={[0.1, 0.5]}
                style={styles.background}
            />
        </View>
    )
}

export default FeaturedButton