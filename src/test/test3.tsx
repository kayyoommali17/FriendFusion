// import Slider from '@react-native-community/slider';
// import React, {useEffect, useState} from 'react';
// import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
// import Orientation, {
//   useDeviceOrientationChange,
// } from 'react-native-orientation-locker';
// import Video from 'react-native-video';
// const App = () => {
//   const {height, width} = Dimensions.get('window');
//   const [paused, setPaused] = useState(true);
//   const [currentTime, setcurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [videoRef, setVideoRef] = useState('');
//   const [currOrientation, setOrientation] = useState('PORTRAIT');
//   const [btnPosition, setBtnPosition] = useState({
//     position: 'absolute',
//     top: 60,
//     right: 10,
//   });
//   const [videoStyle, setVideoStyle] = useState({
//     position: 'absolute',
//     top: 50,
//     height: 200,
//     width: '100%',
//   });
//   const secondsToHHMMSS = (seconds: number | string) => {
//     // credits - https://stackoverflow.com/a/37096512
//     seconds = Number(seconds);
//     const h = Math.floor(seconds / 3600);
//     const m = Math.floor((seconds % 3600) / 60);
//     const s = Math.floor((seconds % 3600) % 60);

//     const hrs = h > 0 ? (h < 10 ? `0${h}:` : `${h}:`) : '';
//     const mins = m > 0 ? (m < 10 ? `0${m}:` : `${m}:`) : '00:';
//     const scnds = s > 0 ? (s < 10 ? `0${s}` : s) : '00';
//     return `${hrs}${mins}${scnds}`;
//   };
//   console.log(currOrientation);
//   // Orientation.getOrientation(res => {
//   //   setOrientation(res);
//   // });
//   useEffect(() => {
//     Orientation.getOrientation(orientation => {
//       console.log(orientation.includes('LANDSCAPE'));
//       if (orientation.includes('LANDSCAPE')) {
//         Orientation.lockToPortrait();
//       }
//     });
//     Orientation.addLockListener(orientation => setOrientation(orientation));
//     return () => {
//       Orientation.removeLockListener(handleFullScreen);
//     };
//   }, []);

//   const handleFullScreen = () => {
//     console.log('curreOtnsdf-->', currOrientation);
//     if (currOrientation.includes('LANDSCAPE')) {
//       Orientation.lockToPortrait();
//       // setFullScreen(false);
//       setVideoStyle({
//         position: 'absolute',
//         top: 50,
//         height: 200,
//         width: '100%',
//       });
//     } else {
//       Orientation.lockToLandscape();
//       setVideoStyle({
//         position: 'absolute',
//         top: 0,
//         height: '100%',
//         width: '100%',
//       });
//       // setFullScreen(true);
//     }

//     console.log('currrrr', currOrientation);
//   };
//   const handleOrientation = (orientation: string) => {
//     console.log('safsdf', orientation);
//     if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
//       // setFullScreen(true);
//       // StatusBar.setHidden(true);
//     } else {
//       setFullScreen(false);
//       // StatusBar.setHidden(false);
//     }
//   };
//   return (
//     <View
//       style={{
//         flex: 1,
//         // backgroundColor: 'red',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <Video
//         resizeMode={'cover'}
//         paused={paused}
//         // fullscreen={isFullScreen}
//         style={videoStyle}
//         source={{
//           uri: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//         }}
//         ref={ref => setVideoRef(ref)}
//         onProgress={obj => setcurrentTime(obj.currentTime)}
//         onLoad={obj => setDuration(obj.duration)}
//       />
//       <Text
//         style={{
//           ...btnPosition,
//           backgroundColor: 'yellow',
//         }}
//         onPress={handleFullScreen}>
//         Orientation
//       </Text>
//       <Slider
//         value={currentTime}
//         tapToSeek
//         minimumValue={0}
//         maximumValue={duration}
//         onSlidingComplete={value => {
//           value = Array.isArray(value) ? value[0] : value;
//           setcurrentTime(value);
//           videoRef.seek(value);
//         }}
//         style={{
//           width: 384,
//           height: 9,
//           marginTop: 29,
//           alignSelf: 'center',
//         }}
//       />
//       <TouchableOpacity
//         style={{borderWidth: 1, marginTop: 100}}
//         onPress={() => setPaused(!paused)}>
//         <Text>Play</Text>
//       </TouchableOpacity>

//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           marginTop: 10,
//           width: 385,
//           alignSelf: 'center',
//         }}>
//         <Text style={{color: 'black'}}>{secondsToHHMMSS(currentTime)}</Text>
//         <Text style={{color: 'black'}}>{secondsToHHMMSS(duration)}</Text>
//         <Text onPress={() => videoRef.seek(currentTime + 10)}>
//           10SecForward
//         </Text>
//         <Text onPress={() => videoRef.seek(currentTime - 10)}>
//           10SecBackward
//         </Text>
//       </View>
//     </View>
//   );
// };

// export default App;
import React, {useState} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';

function SubscribeButton() {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Subscribe');

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
    setShowModal(false);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <Text>{selectedOption}</Text>
      </TouchableOpacity>
      <Modal visible={showModal}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: 'red',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => handleOptionSelect('unsubscribe')}>
              <Text>Unsubscribe</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleOptionSelect('all')}>
              <Text>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleOptionSelect('personalized')}>
              <Text>Personalized</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default SubscribeButton;
