import React, {useState, useEffect, FC} from 'react';

import { View, Text, StyleSheet, SafeAreaView, ListRenderItem, FlatList } from 'react-native';
import { loadNotes } from '../../data/DataLoader';
import { Note } from '../../data/types';
import NoteItem from './NoteItem';
import { useIsFocused } from '@react-navigation/native';

interface NotesListProps {}

const NotesList: FC<NotesListProps> = ({...props}) => {

    const isFocused = useIsFocused();

    const [notesData,setNotesData] = useState<Note[]>([]);

    useEffect(() => {
    
        if (isFocused) {
            updateList();
        }
    
    }, [isFocused]);

    const updateList = () => {
        const data = loadNotes();
        setNotesData(data);
    }

    const renderItem: ListRenderItem<Note> = ({item}) => {
    
        return <NoteItem
            id={item.id}
            title={item.title}
            content={item.content}
        />
    }

    return(<View className="flex-1 mt-0 mb-4 pt-12">
        <FlatList
            data={notesData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    </View>);

};

const styles = StyleSheet.create({

});
export default NotesList;