import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './app/ui/splash/splashComponent';
import CocktailDetails from './app/ui/cocktailDetails/cocktailDetailsComponent';
import CocktailsList from './app/ui/cocktailsList/CocktailsListComponent';
import Favourites from './app/ui/favourites/favouritesComponent';
import Home from './app/ui/home/homeComponent';
import { withContext } from './app/context/favouritesContext';


export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  CocktailsList: undefined;
  CocktailDetails: {
    cocktail: any;
  },
  Favourites: {
    cocktail: any;
  },
};

export const Stack = createStackNavigator<RootStackParamList>();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" headerMode="none">
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CocktailsList" component={CocktailsList} />
          <Stack.Screen name="Favourites" component={Favourites} />
          <Stack.Screen name="CocktailDetails" component={CocktailDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
