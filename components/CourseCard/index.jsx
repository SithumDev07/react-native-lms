import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "../../constants";
import CategoryLabel from "../CategoryLabel";

function CourseCard({ containerStyle, course }) {
    return (
        <TouchableOpacity style={{
            width: '100%',
            overflow: 'hidden',
            borderRadius: SIZES.radius,
            marginBottom: SIZES.radius,
            ...containerStyle
        }}>
            <Image
                source={course.thumbnail}
                resizeMode="cover"
                style={{
                    width: '100%',
                    height: 150,

                    opacity: 0.8,
                }} />
            <View style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                backgroundColor: COLORS.black,
                opacity: .6
            }} />
            <View style={{
                position: 'absolute',
                padding: SIZES.padding * 0.7
            }}>
                <Text style={{
                    fontSize: SIZES.h2,
                    fontWeight: '500',
                    color: COLORS.gray10,
                    flex: 1
                }}>{course.title}</Text>
            </View>
            <CategoryLabel label={course.category} contentContainerStyle={{
                position: 'absolute',
                right: 10,
                bottom: 10,
            }} labelStyle={{
                color: COLORS.gray10,
                fontSize: SIZES.font
            }} />
        </TouchableOpacity>
    )
}

export default CourseCard;