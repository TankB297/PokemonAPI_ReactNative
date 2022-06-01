import {View, Text, Alert, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useState} from 'react/cjs/react.development';
import ListPokemon from './Components/ListPokemon';

export default function App() {
  return (
    <View>
      <ListPokemon />
    </View>
  );
}
