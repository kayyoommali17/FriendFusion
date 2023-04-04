import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

const Cart = ({cartItems, removeItem}) => {
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0,
    );
  };

  const renderItem = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
      }}>
      <Text>{item.name}</Text>
      <Text>{item.quantity}</Text>
      <Text>{item.price}</Text>
      <TouchableOpacity onPress={() => removeItem(item)}>
        <Text style={{color: 'red'}}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  if (cartItems.length === 0) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>No Product added to the cart</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1, padding: 10}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>
        Cart
      </Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        extraData={cartItems}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Text style={{fontWeight: 'bold'}}>Total</Text>
        <Text style={{fontWeight: 'bold'}}>{getTotalPrice()}</Text>
      </View>
    </View>
  );
};

export default Cart;
