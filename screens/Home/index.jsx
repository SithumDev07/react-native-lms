import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const Home = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Register</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: '#191919',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFFFFF'
  }
});

export default Home;
