import { useFonts } from 'expo-font'
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../../constants'
import { stringAvatar } from '../../utils/usableFunctions'
import IconButton from '../IconButton'

function Greeting({ name }) {

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
            paddingVertical: SIZES.padding * 1.2,
            paddingTop: SIZES.padding * 3,
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
        <View style={styles.outContainer}>
            <View style={[styles.flexContainer, styles.commonSpacing]}>
                <TouchableOpacity style={styles.touchOpacity}>
                    <Text style={styles.textBg}>{stringAvatar(name).children}</Text>
                </TouchableOpacity>
                <IconButton icon={icons.google} iconStyle={{
                    tintColor: COLORS.black
                }} />
            </View>
            <Text style={styles.greet}>Good Morning,</Text>
            <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">{name}</Text>
        </View>
    )
}

export default Greeting