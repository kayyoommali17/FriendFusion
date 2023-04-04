import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const ProductList = ({products, cart, setCart}: any) => {
  const [selectedId, setSelectedId] = useState(null);

  const addToCart = item => {
    const newCart = [...cart];
    const index = newCart.findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
      newCart[index].quantity += 1;
    } else {
      newCart.push({...item, quantity: 1});
    }
    setCart(newCart);
  };

  const removeFromCart = item => {
    const newCart = [...cart];
    const index = newCart.findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
      if (newCart[index].quantity === 1) {
        newCart.splice(index, 1);
      } else {
        newCart[index].quantity -= 1;
      }
      setCart(newCart);
    }
  };

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#e6f2ff' : '#fff';

    return (
      <TouchableOpacity
        style={[styles.item, {backgroundColor}]}
        onPress={() => setSelectedId(item.id)}
        onLongPress={() => console.log(item)}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => addToCart(item)}>
            <Text style={styles.addButton}>+</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>
            {cart?.find(cartItem => cartItem.id === item.id)?.quantity || 0}
          </Text>
          <TouchableOpacity onPress={() => removeFromCart(item)}>
            <Text style={styles.removeButton}>-</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      extraData={selectedId}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    elevation: 2,
  },
  title: {
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 5,
  },
  removeButton: {
    backgroundColor: '#f44336',
    color: '#fff',
    borderRadius: 5,
    padding: 5,
    marginHorizontal: 5,
  },
  quantity: {
    marginHorizontal: 5,
    fontSize: 16,
  },
});

export default ProductList;
