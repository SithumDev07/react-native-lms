import { Image, TouchableOpacity, View } from "react-native";
import { SIZES } from "../../constants";

function CourseCard({ containerStyle, course }) {
    return (
        <TouchableOpacity style={{
            width: 270,
            ...containerStyle
        }}>
            <Image source={course.thumbnail} resizeMode="cover" style={{
                width: '100%',
                height: 150,
                marginBottom: SIZES.radius,
                borderRadius: SIZES.radius
            }} />
        </TouchableOpacity>
    )
}

export default CourseCard;