import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'

const CategoryLabel = ({ label, contentContainerStyle, labelStyle }) => {

    const styles = StyleSheet.create({
        labelContainer: {
            padding: SIZES.padding * 0.3,
            backgroundColor: COLORS.primary3,
            borderRadius: SIZES.radius,
            ...contentContainerStyle
        },
        label: {
            fontSize: SIZES.font,
            ...labelStyle
        }
    })

    return (
        <View style={styles.labelContainer}>
            <Text style={styles.label}>{label}</Text>
        </View>
    )
}

export default CategoryLabel