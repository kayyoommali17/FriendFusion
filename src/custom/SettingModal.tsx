import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import {vw} from '../utils/dimensions';
const SettingModal = () => {
  //   const navigation = useNavigation();
  const [visible, setVisble] = useState(false);
  const [modalopen, setModalOpen] = useState(false);

  const data = [
    {
      id: 1,
      title: 'New group',
    },
    {
      id: 2,
      title: 'New broadcast',
    },
    {
      id: 3,
      title: 'Link devices',
    },
    {
      id: 4,
      title: 'Starred messages',
    },
    {
      id: 5,
      title: 'Payments',
    },
    {
      id: 6,
      title: 'Settings',
    },
  ];

  const _renderItem = ({item, index}: any) => {
    return (
      <View style={styles.modalCon}>
        <TouchableOpacity
          onPress={() => {
            setVisble(!visible);
            //   navigation.navigate('Settings');
          }}>
          <Text>{item?.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <Text
        onPress={() => {
          setVisble(!visible);
        }}
        style={{marginTop: 70}}>
        {'open'}
      </Text>
      <Modal
        animationIn="fadeInRight"
        animationOut="fadeOutRight"
        isVisible={visible}
        // transparent={true}
        backdropOpacity={0}
        // onRequestClose={() => {
        //   setVisble(!visible);
        // }}
        onBackdropPress={() => setVisble(!visible)}>
        <FlatList
          contentContainerStyle={{marginTop: 30}}
          data={data}
          renderItem={_renderItem}
        />
      </Modal>
    </View>
  );
};

export default SettingModal;

const styles = StyleSheet.create({
  modalCon: {
    marginLeft: vw(140),
    paddingLeft: vw(10),
    backgroundColor: 'red',
    paddingVertical: vw(10),
  },
});
