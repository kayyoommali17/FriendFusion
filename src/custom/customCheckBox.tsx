import React, {useState} from 'react';
import {FlatList, Text, View, CheckBox} from 'react-native';

const DATA = [
  {id: '1', name: 'Option 1'},
  {id: '2', name: 'Option 2'},
  {id: '3', name: 'Option 3'},
  {id: '4', name: 'Option 4'},
];

const CheckboxExample = () => {
  const [selectedItems, setSelectedItems] = useState<any>([]);

  const handleCheckboxChange = (id: any) => {
    const selectedItemIds = selectedItems.map(item => item.id);
    if (selectedItemIds.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item.id !== id));
    } else {
      const selectedItem = DATA.find(item => item.id === id);
      setSelectedItems([...selectedItems, selectedItem]);
    }
  };

  const renderItem = ({item}) => (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <CheckBox
        value={selectedItems.map(item => item.id).includes(item.id)}
        onValueChange={() => handleCheckboxChange(item.id)}
      />
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Text>
        Selected items: {selectedItems.map(item => item.name).join(', ')}
      </Text>
    </View>
  );
};

export default CheckboxExample;
