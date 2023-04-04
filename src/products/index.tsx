// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import Cart from './Cart';
// import ProductList from './Product';
// export default function MainListing() {
//   return (
//     <View style={styles.container}>
//       <ProductList />
//       <Cart cartItems={undefined} removeItem={undefined} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Cart from './Cart';
import ProductList from './Product';

const Products = [
  {id: 1, name: 'Product-1', price: 100},
  {id: 2, name: 'Product-2', price: 200},
  {id: 3, name: 'Product-3', price: 300},
];

export default function MainListing() {
  const [cartItems, setCartItems] = useState<any>([]);

  const addItem = (productId: any) => {
    const item: any = cartItems.find(
      (item: any) => item.product.id === productId,
    );
    if (item) {
      setCartItems(
        cartItems.map((item: any) =>
          item.product.id === productId
            ? {...item, quantity: item.quantity + 1}
            : item,
        ),
      );
    } else {
      setCartItems([
        ...cartItems,
        {product: Products.find(p => p.id === productId), quantity: 1},
      ]);
    }
  };

  const removeItem = (productId: any) => {
    const item = cartItems.find((item: any) => item.product.id === productId);
    if (item.quantity > 1) {
      setCartItems(
        cartItems.map((item: any) =>
          item.product.id === productId
            ? {...item, quantity: item.quantity - 1}
            : item,
        ),
      );
    } else {
      setCartItems(
        cartItems.filter((item: any) => item.product.id !== productId),
      );
    }
  };

  return (
    <View style={styles.container}>
      <ProductList
        products={Products}
        addItem={addItem}
        removeItem={removeItem}
      />
      <Cart cartItems={cartItems} removeItem={removeItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
