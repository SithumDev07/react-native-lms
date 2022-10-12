import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
import CategoryLabel from "../CategoryLabel";

function CourseCard({ containerStyle, course }) {

    const styles = StyleSheet.create({
        container: {
            borderWidth: .75,
            borderColor: COLORS.gray30,
            padding: SIZES.padding * .4,
            borderRadius: SIZES.radius,
            ...containerStyle
        },
        flexContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        category: {
            color: COLORS.gray70,
            ...FONTS.category
        },
        title: {
            fontWeight: '600',
            color: COLORS.primDark,
            marginTop: 10,
            ...FONTS.body3
        }
    })

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.flexContainer}>
                {/* Content */}
                <View style={{
                    flex: 1
                }}>
                    <Text style={styles.category} numberOfLines={1} ellipsizeMode="tail">{course.category}</Text>
                    <Text style={styles.title}>{course.title}</Text>
                </View>
                {/* Image */}
                <Image
                    source={course.thumbnail}
                    resizeMode="cover"
                    style={{
                        width: SIZES.width * .3,
                        height: 100,
                        borderRadius: SIZES.radius * 1.5
                    }} />
            </View>
        </TouchableOpacity>
    )
}

export default CourseCard;