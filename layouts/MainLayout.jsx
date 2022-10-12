
import React, { useRef } from "react";
import { Animated, Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, constants, SIZES } from "../constants";
import { Announcements, Home, Profile, Search } from '../screens';

const BOTTOM_TABS = constants.bottom_tabs.map((bottom_tab) => ({
  ...bottom_tab,
  ref: React.createRef()
}))

const MainLayout = () => {

  // const [loaded] = useFonts({
  //   Manrope: require('../assets/fonts/Manrope-Regular.ttf')
  // })

  // if (!loaded) {
  //   return null;
  // }

  const flatListRef = useRef()
  const scrollX = useRef(new Animated.Value(0)).current

  function renderContent() {

    return (
      <View style={{
        flex: 1,
      }}>

        <Animated.FlatList
          ref={flatListRef}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={item => `Main-${item.id}`}
          onScroll={Animated.event([
            {
              nativeEvent: { contentOffset: { x: scrollX } }
            }
          ], {
            useNativeDriver: false
          })}
          renderItem={({ item, index }) => {
            return (
              <View style={{
                height: SIZES.height,
                width: SIZES.width,
              }}>
                {/* Change Here */}
                {item.label === constants.screens.home && <Home />}
                {/* {item.label === constants.screens.home && <Announcements />} */}
                {item.label === constants.screens.search && <Search />}
                {item.label === constants.screens.profile && <Profile />}
              </View>
            )
          }}
        />

      </View>
    )
  }

  const Tabs = () => {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row'
      }}>
        {BOTTOM_TABS.map((item, index) => (
          <TouchableOpacity
            key={`Bottom-Tab-${index}`}
            ref={item.ref}
            style={{
              flex: 1,
              paddingHorizontal: 15,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25
              }} />
          </TouchableOpacity>
        ))}
      </View>
    )
  }

  function renderBottomTabs() {

    return (
      <View style={{
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.radius,
        position: 'absolute',
        bottom: 0,
        width: SIZES.width
      }}>

        <View style={{
          borderRadius: SIZES.width / 2,
          backgroundColor: COLORS.primDark,
          width: '100%',
          height: SIZES.height * 0.0875
        }}>
          <Tabs />
        </View>
      </View>
    )
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: COLORS.gray10
    }}>

      {/* Content */}
      {renderContent()}

      {/* Bottom Tabs */}
      {renderBottomTabs()}
    </View>
  )
}

export default MainLayout;