import React, { useState } from 'react';
import { View, Switch } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const backgroundColor = useSharedValue(isDarkMode ? 'black' : 'white');
  const textColor = useSharedValue(isDarkMode ? 'white' : 'black');

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(backgroundColor.value, { duration: 500 }),
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      color: withTiming(textColor.value, { duration: 500 }),
    };
  });

  const toggleSwitch = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    backgroundColor.value =newIsDarkMode ? 'black' : 'white';
    textColor.value = newIsDarkMode ? 'white' : 'black';
  };

  return (
    <Animated.View style={[{ flex: 1, padding: 20 }, animatedStyle]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <View>
          <Animated.Text style={[{ fontWeight: "bold" }, animatedTextStyle]}>Dark Mode</Animated.Text>
          <Animated.Text style={animatedTextStyle}>Toggle the app between light and dark color scheme.</Animated.Text>
        </View>
        <Switch
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      </View>
    </Animated.View>
  );
}