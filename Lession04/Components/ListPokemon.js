import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import ItemPokemon from './ItemPokemon';
import {PokemonThemes} from '../Styles/PokemonThemes';

export default function ListPokemon() {
  const [dataList, setDataList] = useState([]);
  const _list = useRef([]);   

  const backgroundThemes = type => {
    switch (type) {
      case 'grass':
        return PokemonThemes.grass;
      case 'bug':
        return PokemonThemes.bug;
      case 'dark':
        return PokemonThemes.dark;
      case 'dragon':
        return PokemonThemes.dragon;
      case 'electric':
        return PokemonThemes.electric;
      case 'fairy':
        return PokemonThemes.fairy;
      case 'fighting':
        return PokemonThemes.fighting;
      case 'fire':
        return PokemonThemes.fire;
      case 'flying':
        return PokemonThemes.flying;
      case 'ghost':
        return PokemonThemes.ghost;
      case 'ground':
        return PokemonThemes.ground;
      case 'ice':
        return PokemonThemes.ice;
      case 'normal':
        return PokemonThemes.normal;
      case 'poison':
        return PokemonThemes.poison;
      case 'psychic':
        return PokemonThemes.psychic;
      case 'rock':
        return PokemonThemes.rock;
      case 'shadow':
        return PokemonThemes.shadow;
      case 'steel':
        return PokemonThemes.steel;
      case 'unknown':
        return PokemonThemes.unknown;
      case 'water':
        return PokemonThemes.water;
    }
  };

  const getPokemonName = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
      .then(response => response.json())
      .then(json => {
        json.results.forEach(item => {
          _list.current.push(item.name);
        });
        return _list.current;
      }) 
      .then(listName => {
        getData(listName); 
      });  
  };

  const getData = (list) => {
    if (list.length == 20) {
      list.forEach((item, index) => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + item)
          .then(response => response.json())
          .then(json => {
            const data = {};
            data['id'] = index;
            data['img'] =
              json['sprites']['other']['official-artwork']['front_default'];
            data['background'] = backgroundThemes(
              json.types[0]['type']['name'],
            );
            data['name'] = item;
            const check = dataList.some(item => item.id == data.id);
            if (!check) {
              dataList.push(data);
            }
            else{
              return
            }
            return dataList;
          })
          .then(result => {
            setDataList(Array.from(new Set(result)));
          });
      });
    }
  };

  const renderItem = ({item}) => (
    <ItemPokemon
      pokemonBackground={item.background}
      pokemonImage={item.img}
      pokemonName={item.name}
    />
  );

  useEffect(() => {
    getPokemonName();
  }, []);

  return (
    <View>
      {dataList.length > 0 && (
        <FlatList
          data={dataList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      )}
    </View>
  );
}
