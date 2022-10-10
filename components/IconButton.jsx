import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from '../constants'

function IconButton({ containerStyle, icon, iconStyle, onPress }) {

    const styles = StyleSheet.create({
        iconStyle: {
            width: 30,
            height: 30,
            tintColor: COLORS.white,
            ...iconStyle
        }
    })
    return (
        <TouchableOpacity style={{
            ...containerStyle
        }} onPress={onPress}>
            <Image source={icon} resizeMode="contain" style={styles.iconStyle} />
        </TouchableOpacity>
    )
}

export default IconButton