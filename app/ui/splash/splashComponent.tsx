import React, { useEffect, useState } from 'react';
import { View, Text, NavigatorIOS } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';
import { RouteProp } from '@react-navigation/native';

import { splashStyle } from './splashStyles';

const Splash = ({ navigation, route }: SplashProps): JSX.Element => {

  useEffect(() => {
    const time = setTimeout(() => {
      navigation.navigate('Home')
    }, 3000);
    return () => clearTimeout(time)
  },
    []
  )

  return (
    <View style={splashStyle.container}>
      <Text style={splashStyle.text}>COCKTAILS FINDER</Text>
    </View>
  );
}


type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Splash'
>;
type SplashScreenRouteProp = RouteProp<RootStackParamList, 'Splash'>;

type SplashProps = {
  navigation: SplashScreenNavigationProp;
  route: SplashScreenRouteProp;
}

export default Splash;
