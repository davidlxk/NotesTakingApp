import React, {useState, useEffect, FC} from 'react';

import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { StackParamList } from "../../navigation/StackTypes";
import uuid from "react-native-uuid";
import { saveNewNote } from '../../data/DataLoader';

interface AddNoteScreenProps {

    
}

type addNoteScreenProp = StackNavigationProp<StackParamList, 'AddNote'>;


const AddNoteScreen: FC<AddNoteScreenProps> = ({...props}) => {

    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const navigation = useNavigation<addNoteScreenProp>();

    const backToHome = () => {
    
        navigation.navigate("Home");
    }

    const addNewNote = () => {
        
        const newNote: Note = {
            id: "" + uuid.v4(),
            title,
            content
        };
        saveNewNote(newNote);
        backToHome();
    }

    return(<View className="flex flex-col h-full">
        <View className="pt-56">
            <Text className="text-5xl text-blue-500 pl-5 font-extralight">Add New Note</Text>
        </View>
        <View className="w-full px-5 pt-8 z-0">
            <TextInput value={title} onChangeText={(text)=>setTitle(text)} placeholder='Title' className="w-full border-b-gray-400 border-b-0.5 pb-2" />
        </View>
        <View className="w-full px-5 pt-8 z-0">
            <TextInput value={content} onChangeText={(text)=>setContent(text)} placeholder='Content' className="w-full border-b-gray-400 border-b-0.5 pb-2" />
        </View>
        <View className="flex flex-col mt-20 px-5 w-full h-20 text-center">
            <TouchableOpacity onPress={addNewNote} className="h-16 bg-blue-500 w-full rounded text-center">
                <Text className="text-white text-center py-4 text-base font-light">{"Add"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={backToHome} className="h-16 w-full rounded text-center border-blue-500 border mt-4">
                <Text className="text-blue-500 text-center py-4 text-base font-light">{"Cancel"}</Text>
            </TouchableOpacity>
        </View>
    </View>
    );

};

const styles = StyleSheet.create({

});
export default AddNoteScreen;