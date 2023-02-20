import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Animated, Text} from 'react-native';

const ProgressBar = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 5000, // the duration of the animation in milliseconds
      useNativeDriver: false, // set to false to animate non-native styles
    }).start();
  }, []);

  const width = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '70%'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Animated.View style={[styles.progress, {width}]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    // flexDirection: 'column-reverse',
  },
  bar: {
    width: '80%',
    height: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#007AFF',
  },
});

export default ProgressBar;
