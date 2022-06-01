import { StyleSheet, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('screen').width;
const heightWidth = Dimensions.get('screen').height;

const ItemPokemonStyles = StyleSheet.create({
    itemContainer: {
        width: screenWidth/2,
        height: heightWidth/6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemImage: {
        width: screenWidth/3.8,
        height: heightWidth/9.3,
    },
    itemText: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 15
    }
})

export default ItemPokemonStyles