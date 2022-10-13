import { ScrollView, StyleSheet, Text, View } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { CourseCard, Greeting, IconButton, LineDivider, TextButton } from '../../components';
import { COLORS, dummyData, FONTS, icons, SIZES } from "../../constants";

const Home = () => {

  const animation = useSharedValue(250)
  const topPadding = useSharedValue(SIZES.padding * 3)
  const fontSizeTitle = useSharedValue(SIZES.body1)
  const fontSizeGreeting = useSharedValue(SIZES.body3)
  const scaleTitle = useSharedValue(1)
  const marginTopTitle = useSharedValue(SIZES.padding * .275)
  const commonSpacing = useSharedValue(SIZES.padding * 0.5)
  const commonTransform = useSharedValue(0)

  const animationStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(animation.value, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
      paddingTop: withTiming(topPadding.value, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      })
    }
  }, [])

  const textStyle = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(fontSizeTitle.value, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
      transform: [
        {
          scale: withTiming(scaleTitle.value, {
            duration: 500,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
          })
        }
      ],
      marginTop: withTiming(marginTopTitle.value, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      })
    }
  }, [])

  const textStylesGreeting = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(fontSizeGreeting.value, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
      transform: [
        {
          scale: withTiming(scaleTitle.value, {
            duration: 500,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
          })
        }
      ]
    }
  }, [])

  const commonSpacingStyle = useAnimatedStyle(() => {
    return {
      marginBottom: withTiming(commonSpacing.value, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
      transform: [
        {
          translateY: withTiming(commonTransform.value, {
            duration: 500,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
          })
        }
      ]
    }
  }, [])

  return (
    <View style={styles.container}>
      {/* Header */}
      {/* Greeting */}

      <Greeting name={"Sithum Basnayaka"} commonSpacingStyle={commonSpacingStyle} animationStyle={animationStyle} textStyle={textStyle} textStylesGreeting={textStylesGreeting} />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: SIZES.padding * 4,
          paddingHorizontal: SIZES.padding
        }}
        showsVerticalScrollIndicator={false}
        onScroll={
          (event) => {
            const scrolling = event.nativeEvent.contentOffset.y;

            if (scrolling > 100) {
              animation.value = 100
              topPadding.value = SIZES.padding * .5
              fontSizeTitle.value = 0
              fontSizeGreeting.value = 0
              scaleTitle.value = 0
              marginTopTitle.value = 0
              commonSpacingStyle.value = 0
              commonTransform.value = 10
            } else {
              animation.value = 250
              topPadding.value = SIZES.padding * 3
              fontSizeTitle.value = SIZES.body1
              fontSizeGreeting.value = SIZES.body3
              scaleTitle.value = 1
              marginTopTitle.value = SIZES.padding * .275
              commonSpacingStyle.value = SIZES.padding * 0.5
              commonTransform.value = 0
            }
          }
        }
        scrollEventThrottle={20}
      >
        {/* New & Recommended */}
        <View style={[styles.flexContainer, styles.commonSpacing]}>
          <Text style={styles.linkTitle}>New & Recommended</Text>
          <IconButton icon={icons.all} iconStyle={{
            tintColor: COLORS.black
          }} />
        </View>
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

        <TextButton title={"View All"} />

        <LineDivider lineStyle={{
          marginVertical: SIZES.padding * .4
        }} />

        {/* Enrolled Courses */}
        <View style={[styles.flexContainer, styles.commonSpacing]}>
          <Text style={styles.linkTitle}>Enrolled Courses</Text>
          <IconButton icon={icons.all} iconStyle={{
            tintColor: COLORS.black
          }} />
        </View>

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
            }} course={item} isEnrolled />
          )} />

        <TextButton title={"View All"} />

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
  },
  linkTitle: {
    color: COLORS.gray70,
    ...FONTS.body2
  }
});

export default Home;
