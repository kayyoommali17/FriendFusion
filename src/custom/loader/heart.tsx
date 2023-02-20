import React, {useRef, useEffect} from 'react';
import {View, Animated, Easing} from 'react-native';

const Heart = ({size = 50, color = '#999'}) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [spinValue]);

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const scale = spinValue.interpolate({
    inputRange: [0.2, 0.4, 0.6, 0.8],
    outputRange: [1, 0.6, 0.4, 1],
  });

  const spinnerStyle = {
    width: size,
    height: size,
    // borderRadius: size / 2,
    borderColor: color,
    // borderWidth: size / 10,
    transform: [{scale}],
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Animated.View style={spinnerStyle}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              height: size,
              width: size,
              borderRadius: size,
              left: 10 - size / 2,
              backgroundColor: 'red',
            }}
          />
          <View
            style={{
              height: size,
              width: size,
              borderRadius: size,
              right: 10 + size / 2,
              backgroundColor: 'red',
            }}
          />
        </View>
        <View
          style={{
            height: size,
            width: size,
            transform: [
              {
                rotate: '45deg',
              },
            ],
            left: 25 - size / 2,
            bottom: 35,
            backgroundColor: 'red',
          }}
        />
      </Animated.View>
    </View>
  );
};

export default Heart;
