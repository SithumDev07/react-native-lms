import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Animated from 'react-native-reanimated'
import { COLORS, FONTS, icons, SIZES } from '../../constants'
import { stringAvatar } from '../../utils/usableFunctions'
import IconButton from '../IconButton'

function Greeting({ name, animationStyle = {}, textStyle, textStylesGreeting, commonSpacingStyle }) {

    const [loaded] = useFonts({
        Manrope: require('../../assets/fonts/Manrope-Regular.ttf'),
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf')
    })

    if (!loaded) {
        return null;
    }

    const styles = StyleSheet.create({
        flexContainer: {
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row'
        },
        textBg: {
            color: COLORS.additionalColor11,
            ...FONTS.h2
        },
        touchOpacity: {
            padding: SIZES.padding * 0.5,
            backgroundColor: stringAvatar(name).bgcolor,
            borderRadius: SIZES.radius * 3,
            borderColor: COLORS.gray10,
            borderWidth: 2
        },
        outContainer: {
            paddingHorizontal: SIZES.padding,
            // paddingTop: SIZES.padding * 3,
            backgroundColor: COLORS.greeting
        },
        commonSpacing: {
            marginBottom: SIZES.padding * 0.5
        },
        name: {
            marginTop: SIZES.padding * .275,
            color: COLORS.gray70,
            ...FONTS.title
        },
        greet: {
            color: COLORS.gray80,
            ...FONTS.body3
        }
    })

    return (
        <Animated.View style={[styles.outContainer, animationStyle]}>
            <Animated.View style={[styles.flexContainer, styles.commonSpacing, commonSpacingStyle]}>
                <TouchableOpacity style={styles.touchOpacity}>
                    <Text style={styles.textBg}>{stringAvatar(name).children}</Text>
                </TouchableOpacity>
                <IconButton icon={icons.google} iconStyle={{
                    tintColor: COLORS.black
                }} />
            </Animated.View>
            <Animated.Text style={[styles.greet, textStylesGreeting]}>Good Morning,</Animated.Text>
            <Animated.Text style={[styles.name, textStyle]} numberOfLines={1} ellipsizeMode="tail">{name}</Animated.Text>
        </Animated.View>
    )
}

export default Greeting