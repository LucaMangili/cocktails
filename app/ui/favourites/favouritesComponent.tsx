import React, { useContext, useState, useEffect, useMemo } from "react";
import { RootStackParamList } from "../../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { View, Text, FlatList, TouchableNativeFeedback, Image, TextInput } from "react-native";
import { favouritesStyle } from "./favouritesStyle";

import { FavouritesContext } from '../../context'
import { cocktailType } from "../../cocktailType";


const Favourites = ({ navigation, route }: FavouritesProps): JSX.Element => {

    // const favouritesCtx = useContext(FavouritesContext);
    // const { favourites } = favouritesCtx

    // const [searchText, setSearchText] = useState<string>("")
    // const [filteredFavourites, setFilteredFavourites] = useState<cocktailType[]>([])

    // const searchFiltered = (text: string) => {
    //     const newArr = favourites.filter(el => {
    //         console.log(newArr)
    //         const itemData = el.strDrink.toUpperCase();
    //         const textData = text.toUpperCase();
    //         return itemData.indexOf(textData) > -1;
    //     });
    //     setFilteredFavourites(newArr)
    // }

    // useEffect(() => {
    //     searchFiltered(searchText)
    // }, [searchText])

    const favouritesCtx = useContext(FavouritesContext);
    const { favourites } = favouritesCtx

    const [searchText, setSearchText] = useState<string>("")

    const filterdFavourites = useMemo(() => {
        const newArr = favourites.filter(el => {
            const itemData = el.strDrink.toUpperCase();
            const textData = searchText.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        return newArr;
    }, [favourites, searchText])


    return (
        <View>
            <View style={favouritesStyle.container}>
                <Text style={favouritesStyle.header}>Cocktails</Text>
            </View>
            <View>
                <TextInput underlineColorAndroid={"#8B0000"} onChangeText={e => setSearchText(e)} value={searchText} />
            </View>
            <View>
                <Text style={favouritesStyle.bold}>Your Favourites:</Text>
            </View>
            <View>
                <FlatList keyExtractor={item => item.idDrink.toString()} data={filterdFavourites} renderItem={({ item }) => {
                    return (
                        <TouchableNativeFeedback onPress={() => navigation.navigate("CocktailDetails", { cocktail: item })}>
                            <View>
                                <View>
                                    <Text>{item.strDrink}</Text>
                                </View>
                                <View>
                                    <Image style={{ width: 30, height: 30 }} source={{ uri: item.strDrinkThumb }} />
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                    )
                }} />
            </View>
        </View>
    )
}


type FavouritesScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Favourites'
>;
type FavouritesScreenRouteProp = RouteProp<RootStackParamList, 'Favourites'>;

type FavouritesProps = {
    navigation: FavouritesScreenNavigationProp;
    route: FavouritesScreenRouteProp;
}

export default Favourites;