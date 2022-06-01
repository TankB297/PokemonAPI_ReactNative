import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import ItemPokemonStyles from '../Styles/ItemPokemonStyles';

export default function ItemPokemon({
  pokemonName,
  pokemonImage,
  pokemonBackground,
}) {
  const screenWidth = Dimensions.get('screen').width;
  const heightWidth = Dimensions.get('screen').height;
  return (
    <View style={ItemPokemonStyles.itemContainer}>
      <View
        style={{
          width: screenWidth/2.5,
          height: heightWidth/6.8,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: pokemonBackground,
        }}>
        <Image
          source={{uri: pokemonImage}}
          style={ItemPokemonStyles.itemImage}
        />
        <Text style={ItemPokemonStyles.itemText}>{pokemonName}</Text>
      </View>
    </View>
  );
}
