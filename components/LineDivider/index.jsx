import { View } from "react-native";
import { COLORS } from "../../constants";

function LineDivider({ lineStyle }) {
    return (
        <View style={{
            height: 2,
            width: '100%',
            backgroundColor: COLORS.gray20,
            ...lineStyle
        }} />
    )
}

export default LineDivider