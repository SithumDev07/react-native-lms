
import { useRef } from "react";
import { Animated, View } from "react-native";
import { COLORS, constants, SIZES } from "../constants";
import { Home, Profile, Search } from '../screens';


function RenderContent() {

  const flatListRef = useRef()
  const scrollX = useRef(new Animated.Value(0)).current

  return (
    <View style={{
      flex: 1
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
              width: SIZES.width
            }}>
              {item.label === constants.screens.home && <Home />}
              {item.label === constants.screens.search && <Search />}
              {item.label === constants.screens.profile && <Profile />}
            </View>
          )
        }}
      />

    </View>
  )
}

const MainLayout = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: COLORS.white
    }}>

      {/* Content */}
      <RenderContent />

    </View>
  )
}

export default MainLayout;