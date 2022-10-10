const { View, Animated } = require("react-native");
import { useRef } from "react";
import { WHITE } from "../constants/colors";
import { WIDTH } from "../constants/sizes";

const MainLayout = () => {
  const flatListRef = useRef();

  function renderContent() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Animated.FlatList
          ref={flatListRef}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={WIDTH}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
        ></Animated.FlatList>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: WHITE,
      }}
    >
      <Text>Main Layout</Text>
    </View>
  );
};

export default MainLayout;
