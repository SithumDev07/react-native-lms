import { useFonts } from 'expo-font';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import { IconButton, CourseCard, LineDivider, Greeting } from '../../components';
import { COLORS, dummyData, FONTS, icons, SIZES } from "../../constants";


const Home = () => {
  const [loaded] = useFonts({
    Manrope: require('../../assets/fonts/Manrope-Regular.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Italic': require('../../assets/fonts/Poppins-Italic.ttf')
  })

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      {/* Greeting */}
      <Greeting name={"Sithum Basnayaka"} />

      <View style={[styles.flexContainer, styles.commonSpacing]}>
        <Text style={styles.linkTitle}>Continue to Learn</Text>
        <IconButton icon={icons.all} iconStyle={{
          tintColor: COLORS.black
        }} />
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={{
        paddingBottom: 150,
        paddingHorizontal: SIZES.padding
      }} showsVerticalScrollIndicator={false}>
        <FlatList
          data={dummyData.courses_list_1}
          listKey="Courses"
          keyExtractor={item => `Courses-${item.id}`}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: SIZES.padding * .7
          }}
          renderItem={({ item, index }) => (
            <CourseCard containerStyle={{
              marginBottom: SIZES.padding
            }} course={item} />
          )} />

        <LineDivider lineStyle={{
          marginVertical: SIZES.padding
        }} />
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greeting: {
    flex: 1
  },
  flexContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  commonSpacing: {
    marginBottom: SIZES.padding * 0.5,
    marginTop: SIZES.padding * 0.5,
    paddingHorizontal: SIZES.padding
  },
  linkTitle: {
    color: COLORS.gray70,
    ...FONTS.body2
  }
});

export default Home;
