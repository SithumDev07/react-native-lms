import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, FONTS, SIZES } from '../../constants'

const TextButton = ({ title, contentContainerStyle, clickHandler }) => {

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'center',
            paddingHorizontal: SIZES.padding,
            paddingVertical: SIZES.padding * .5,
            ...contentContainerStyle
        },
        title: {
            color: COLORS.primary,
            ...FONTS.h3
        }
    })

    return (
        <TouchableOpacity style={styles.container} onPress={clickHandler}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TextButton