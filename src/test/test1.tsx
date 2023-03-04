// first one otp component

// import React, {useState, useRef} from 'react';

// import {View, TextInput, Text} from 'react-native';

// const OtpInput = () => {
//   const [otp, setOtp] = useState<any>('');
//   // const otpString = otp.join('');
//   // const otpNumber = parseInt(otpString);

//   const textInputRefs: any = [
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//   ];

//   const handleOtpChange = (index: number, value: any) => {
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     if (value && index < textInputRefs.length - 1) {
//       textInputRefs[index + 1].current.focus();
//     }

//     setOtp(newOtp);
//   };

//   const handleOtpKeyPress = (index: number, key: any) => {
//     if (key === 'Backspace' && !otp[index] && index > 0) {
//       textInputRefs[index - 1].current.focus();
//     }
//   };

//   const handleOnPaste = (e: any) => {
//     const pastedData = e.nativeEvent.clipboardData.getData('text');
//     const otpArray = pastedData.split('').slice(0, 4);
//     const newOtp = [...otp];
//     otpArray.forEach((value: any, index: any) => {
//       newOtp[index] = value;
//       if (index < textInputRefs.length - 1) {
//         textInputRefs[index + 1].current.focus();
//       }
//     });

//     setOtp(newOtp);
//   };

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       {/* <Text>{otpString}</Text> */}
//       <View style={{flexDirection: 'row'}}>
//         {[0, 1, 2, 3].map(i => (
//           <View key={i} style={{marginHorizontal: 8, marginTop: 50}}>
//             <TextInput
//               ref={textInputRefs[i]}
//               style={{
//                 borderWidth: 1,
//                 width: 40,
//                 height: 40,
//                 borderRadius: 4,
//                 fontSize: 20,
//                 textAlign: 'center',
//               }}
//               keyboardType="number-pad"
//               maxLength={1}
//               multiline={false}
//               value={otp[i]}
//               autoCorrect={false}
//               selection={{start: 1, end: 1}}
//               onChangeText={value => {
//                 handleOtpChange(i, value);
//               }}
//               onKeyPress={({nativeEvent}) =>
//                 handleOtpKeyPress(i, nativeEvent.key)
//               }
//             />
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// };

// export default OtpInput;

//

//second loader one

// import React, {useEffect, useState} from 'react';
// import {View, StyleSheet, Animated} from 'react-native';

// const SmoothLoader = () => {
//   const [animation] = useState(new Animated.Value(0));

//   useEffect(() => {
//     Animated.loop(
//       Animated.timing(animation, {
//         toValue: 1,
//         duration: 1500,
//         useNativeDriver: true,
//       }),
//     ).start();
//   }, [animation]);

//   const opacity = animation.interpolate({
//     inputRange: [0, 0.5, 1],
//     outputRange: [1, 0.5, 1],
//   });

//   const scale = animation.interpolate({
//     inputRange: [0, 0.5, 1],
//     outputRange: [1, 1.5, 1],
//   });

//   const borderRadius = animation.interpolate({
//     inputRange: [0, 0.5, 1],
//     outputRange: [20, 5, 20],
//   });

//   return (
//     <View style={styles.container}>
//       <Animated.View
//         style={[styles.circle, {opacity, transform: [{scale}], borderRadius}]}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   circle: {
//     width: 50,
//     height: 50,
//     backgroundColor: '#FF6B6B',
//   },
// });

// export default SmoothLoader;

// thrid loader one

// import React, {useState, useEffect} from 'react';
// import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// const CustomLoader = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     let interval;
//     if (isLoading) {
//       interval = setInterval(() => {
//         setLoaderIndex(loaderIndex =>
//           loaderIndex === 3 ? 0 : loaderIndex + 1,
//         );
//       }, 300);
//     } else {
//       clearInterval(interval);
//       setLoaderIndex(0);
//     }

//     return () => clearInterval(interval);
//   }, [isLoading]);

//   const [loaderIndex, setLoaderIndex] = useState(0);

//   const handlePress = () => {
//     setIsLoading(true);

//     // You can add your login API call here

//     setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={handlePress}
//         disabled={isLoading}>
//         <View style={styles.buttonWrapper}>
//           {isLoading && (
//             <View style={[styles.loader, styles[`loader_${loaderIndex}`]]} />
//           )}
//           <Text style={styles.buttonText}>
//             {isLoading ? 'Logging in...' : 'Log In'}
//           </Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     backgroundColor: '#2F80ED',
//     borderRadius: 8,
//     padding: 16,
//     minWidth: 200,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontWeight: 'bold',
//     fontSize: 16,
//     marginLeft: 8,
//   },
//   loader: {
//     width: 4,
//     height: 4,
//     borderRadius: 2,
//     marginHorizontal: 4,
//   },
//   loader_0: {
//     backgroundColor: '#FFFFFF',
//   },
//   loader_1: {
//     backgroundColor: '#F2C94C',
//   },
//   loader_2: {
//     backgroundColor: '#219653',
//   },
//   loader_3: {
//     backgroundColor: '#EB5757',
//   },
// });

// export default CustomLoader;

// fourth loader with login button

// import React, {useState} from 'react';
// import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';

// const CustomLoader = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [animation] = useState(new Animated.Value(0));

//   const handlePress = () => {
//     setIsLoading(true);

//     // You can add your login API call here

//     setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);
//   };

//   const backgroundLineStyle = {
//     width: 200,
//     height: 1,
//     backgroundColor: '#E5E5E5',
//     position: 'absolute',
//     bottom: '50%',
//   };

//   const foregroundLineStyle = {
//     width: 100,
//     height: 1,
//     backgroundColor: '#000000',
//     position: 'absolute',
//     bottom: '50%',
//     transform: [
//       {
//         translateX: animation.interpolate({
//           inputRange: [0, 1],
//           outputRange: [0, 100],
//         }),
//       },
//     ],
//   };

//   if (isLoading) {
//     Animated.loop(
//       Animated.timing(animation, {
//         toValue: 1,
//         duration: 1000,
//         useNativeDriver: true,
//       }),
//     ).start();
//   } else {
//     animation.stopAnimation();
//   }

//   return (
//     <View style={styles.container}>
//       <View style={backgroundLineStyle} />
//       <Animated.View style={foregroundLineStyle} />
//       <TouchableOpacity
//         style={styles.button}
//         onPress={handlePress}
//         disabled={isLoading}>
//         <Text style={styles.buttonText}>
//           {isLoading ? 'Logging in...' : 'Log In'}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     backgroundColor: '#2F80ED',
//     borderRadius: 8,
//     padding: 16,
//     minWidth: 200,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 300,
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// export default CustomLoader;

// fifth loader
