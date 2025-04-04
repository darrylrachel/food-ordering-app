import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Platform, FlatList } from 'react-native';
import {  useCart } from '../provider/CartProvider';
import CartListItem from '../components/CartListItem';

const CartScreen = () => {
  const { items } = useCart()
  return (
    <View>
      <FlatList 
        data={items} 
        renderItem={({item}) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ padding: 10, gap: 10}}
      />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};

export default CartScreen;