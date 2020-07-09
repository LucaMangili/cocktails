import React, { useContext, useState, useEffect } from "react";
import { RootStackParamList } from "../../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { View, Text } from "react-native";
import { favouritesStyle } from "./favouritesStyle";

import { FavouritesContext } from '../../context'
import { withContext } from "../../context/favouritesContext";

const Favourites = ({ navigation, route }: FavouritesProps): JSX.Element => {

    const favouritesCtx = useContext(FavouritesContext);

    const { favourites } = favouritesCtx

    console.log("consumer -->", favouritesCtx)

    return (
        <View>
            <View style={favouritesStyle.container}>
                <Text style={favouritesStyle.header}>Cocktails</Text>
            </View>
            <View>
                {favourites.map(el => (
                    <View>
                        <Text>{el.toString()}</Text>
                    </View>
                ))}
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