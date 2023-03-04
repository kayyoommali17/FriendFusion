import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import localeImage from '../utils/localeImages';

const TouchableImage = () => {
  const [image, setImage] = useState<any>(null);
  const [uploading, setUploading] = useState(false);

  const handleChoosePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(image.path);
    });
  };

  const handleUpload = async () => {
    if (!image) return;

    setUploading(true);

    const reference = storage().ref(`images/${image}`);
    const task = reference.putFile(image);

    task.on('state_changed', taskSnapshot => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );
    });

    task.then(() => {
      console.log('Image uploaded to the bucket!');
      setUploading(false);
      Alert.alert('Success', 'Image uploaded successfully!');
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={handleChoosePhoto}>
        {image ? (
          <Image source={{uri: image}} style={{width: 200, height: 200}} />
        ) : (
          <Image
            source={localeImage.camera}
            style={{width: 200, height: 200}}
          />
        )}
      </TouchableOpacity>
      <Button title="Upload" onPress={handleUpload} disabled={!image} />
      {uploading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
};

export default TouchableImage;
