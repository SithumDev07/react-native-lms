import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS } from "../../constants";

export default function Profile() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      ...FONTS.h1,
      color: COLORS.primDark
    }
  })

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
    </View>
  );
}
