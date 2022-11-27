import React, {useState, useEffect, FC} from 'react';

import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import NotesList from '../../components/notes/NotesList';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { StackParamList } from "../../navigation/StackTypes";

interface HomeScreenProps {

    
}

type homeScreenProp = StackNavigationProp<StackParamList, 'Home'>;

const HomeScreen: FC<HomeScreenProps> = ({...props}) => {

    const navigation = useNavigation<homeScreenProp>();

    const goToAddNote = () => {
    
        navigation.navigate("AddNote");
    }

    return(<View className="flex flex-col h-full bg-white">
        <NotesList />
        <View className="flex flex-row absolute bottom-0 px-5 w-full h-20 text-center">
            <TouchableOpacity onPress={goToAddNote} className="h-16 bg-blue-500 w-16 rounded-full text-center right-6 absolute">
                <Text className="text-center py-3 text-white font-extralight text-2xl">{"+"}</Text>
            </TouchableOpacity>
        </View>
    </View>);

};

const styles = StyleSheet.create({

});
export default HomeScreen;