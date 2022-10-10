import { useFonts } from 'expo-font';
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import { IconButton, CourseCard } from '../../components';
import { COLORS, dummyData, icons, SIZES } from "../../constants";


const PADDING = 10

const Home = () => {
  const [loaded] = useFonts({
    Manrope: require('../../assets/fonts/Manrope-Regular.ttf')
  })

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Greetings */}
        <View style={styles.greeting}>
          <Text style={{
            color: COLORS.gray50,
            fontFamily: 'Manrope',
            fontSize: SIZES.h3,
            lineHeight: 22
          }}>Hello</Text>
          <Text>Thursday, 9th September, 2022</Text>
        </View>

        {/* Notifications */}
        <IconButton icon={icons.notification} iconStyle={{
          tintColor: COLORS.black
        }} />
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={{
        paddingBottom: 150,
      }} showsVerticalScrollIndicator={false}>
        <FlatList horizontal data={dummyData.courses_list_1} listKey="Courses" keyExtractor={item => `Courses-${item.id}`} showsHorizontalScrollIndicator={false} contentContainerStyle={{
          marginTop: SIZES.padding
        }} renderItem={({ item, index }) => (
          <CourseCard containerStyle={{
            marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
            marginRight: index === dummyData.courses_list_1.length - 1 ? SIZES.padding : 0
          }} course={item} />
        )} />
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 10,
    paddingHorizontal: PADDING,
    alignItems: 'center'
  },
  greeting: {
    flex: 1
  }
});

export default Home;
