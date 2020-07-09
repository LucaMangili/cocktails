import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, FlatList } from 'react-native'
import { cocktailsListStyle } from './CocktailsListStyle';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../../../App';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';



const CocktailsList = ({ navigation, route }: CocktailsListProps): JSX.Element => {

    const [cocktails, setCocktails] = useState<any[]>([]);
    const [searchText, setSearchText] = useState<string>("");


    const findCocktail = (text: string): any => {
        if (searchText !== "") {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`).then(res => res.json()).then(data => setCocktails(data.drinks))
        } else {
            return null
        }
    }

    useEffect(() => {
        findCocktail(searchText)
    }, [searchText])

    return (
        <>
            <View style={cocktailsListStyle.container}>
                <Text style={cocktailsListStyle.header}>Cocktails</Text>
            </View>
            <View>
                <TextInput underlineColorAndroid={"#8B0000"} onChangeText={e => setSearchText(e)} value={searchText} />
                <View style={cocktailsListStyle.listContainer}>
                    {cocktails ? (
                        <FlatList keyExtractor={item => item.idDrink} data={cocktails} renderItem={({ item }) => {
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
                    ) : null}
                </View>
            </View>
        </>
    );
}


const Tab = createBottomTabNavigator<RootStackParamList>();

type CocktailsListScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'CocktailsList'
>;
type CocktailsListScreenRouteProp = RouteProp<RootStackParamList, 'CocktailsList'>;

type CocktailsListProps = {
    navigation: CocktailsListScreenNavigationProp;
    route: CocktailsListScreenRouteProp;
}

export default CocktailsList;
