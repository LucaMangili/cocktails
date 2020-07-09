import React, { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';
import { RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CocktailsList from '../cocktailsList/CocktailsListComponent';
import Favourites from '../favourites/favouritesComponent';
import CocktailIcon from 'react-native-vector-icons/FontAwesome5'
import FavouritesIcon from 'react-native-vector-icons/AntDesign'
import { FavouritesContextProvider } from '../../context'
import { View } from 'react-native';


const Home = ({ navigation, route }: HomeProps): JSX.Element => {

    return (
        <FavouritesContextProvider favourites={[]} >
            <Tab.Navigator>
                <Tab.Screen
                    name="CocktailsList"
                    component={CocktailsList}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <CocktailIcon name="cocktail" size={30} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Favourites"
                    component={Favourites}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <FavouritesIcon name="heart" size={30} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
            {/* <View>
                <Favourites navigation={navigation as any} route={route as any} />
            </View> */}
        </FavouritesContextProvider>
    )
}

const Tab = createBottomTabNavigator<RootStackParamList>();

type HomeScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Home'
>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type HomeProps = {
    navigation: HomeScreenNavigationProp;
    route: HomeScreenRouteProp;
}

export default Home;