import React, { useState, useContext } from "react";
import { View, Text, Image, Alert } from "react-native";
import { RootStackParamList } from "../../../App";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { cocktailDetailsStyle } from "./cocktailDetailsStyle";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import AddIcon from 'react-native-vector-icons/FontAwesome'
import { FavouritesContext } from "../../context";
import { cocktailType } from "../../cocktailType";




const CocktailDetails = ({ navigation, route }: CocktailDetailsProps): JSX.Element => {
    const cocktail: cocktailType = route.params.cocktail

    const addAlert = () => {
        Alert.alert(
            '',
            'Added to Favourites!',
            [
                {
                    text: 'Cancel',
                    onPress: () => { },
                    style: 'cancel'
                },
                { text: 'Go to Favourites', onPress: () => navigation.navigate("Favourites", cocktail) }
            ],
            { cancelable: false }
        );
    }

    const { addNewFavourites } = useContext(FavouritesContext);

    return (
        <>
            <View style={cocktailDetailsStyle.container}>
                <Text style={cocktailDetailsStyle.header}>Cocktails</Text>
            </View>
            <View style={{ height: "50%" }}>
                <Image style={cocktailDetailsStyle.image} source={{ uri: cocktail.strDrinkThumb }} />
            </View>
            <View>
                <Text style={cocktailDetailsStyle.cocktailName}>{cocktail.strDrink}</Text>
                <Text style={cocktailDetailsStyle.title}>Ingredients:</Text>
                <Text>{cocktail.strIngredient1}</Text>
                <Text>{cocktail.strIngredient2}</Text>
                <Text>{cocktail.strIngredient3}</Text>
                <Text style={cocktailDetailsStyle.title}>Preparation:</Text>
                <Text>{cocktail.strInstructions}</Text>
            </View>
            <View style={cocktailDetailsStyle.iconTextContainer}>
                <TouchableNativeFeedback onPress={() => (
                    addNewFavourites(cocktail),
                    addAlert())}>
                    <AddIcon name="plus" size={30} />
                </TouchableNativeFeedback>
                <Text>Add to Favourites!</Text>
            </View>
        </>
    )
}



type CocktailDetailsScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'CocktailDetails'
>;
type CocktailDetailsScreenRouteProp = RouteProp<RootStackParamList, 'CocktailDetails'>;

type CocktailDetailsProps = {
    navigation: CocktailDetailsScreenNavigationProp;
    route: CocktailDetailsScreenRouteProp;
}

export default CocktailDetails;