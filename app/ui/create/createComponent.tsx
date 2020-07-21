import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import { View, Text, TextInput } from 'react-native';
import { createStyle } from './createStyle';





const Create = ({ navigation, route }: CreateProps): JSX.Element => {

    return (
        <>
            <View style={createStyle.container}>
                <Text style={createStyle.header}>Cocktails</Text>
            </View>
            <View>
                <Text style={createStyle.title}>Create your cocktail!</Text>
            </View>
            <TextInput underlineColorAndroid={"#8B0000"} onChangeText={() => { }} />
            <TextInput underlineColorAndroid={"#8B0000"} onChangeText={() => { }} />
        </>
    )
}

type CreateScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Create'
>;
type CreateScreenRouteProp = RouteProp<RootStackParamList, 'Create'>;

type CreateProps = {
    navigation: CreateScreenNavigationProp;
    route: CreateScreenRouteProp;
}

export default Create;