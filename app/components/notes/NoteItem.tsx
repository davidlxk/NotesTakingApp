import React, {useState, useEffect, FC} from 'react';

import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import Animated, { useSharedValue, useAnimatedStyle, withSequence, withTiming } from 'react-native-reanimated';

interface NoteItemProps {

    title: string;
    id: string;
    content: string;
}

const NoteItem: FC<NoteItemProps> = ({...props}) => {

    const offset = useSharedValue(0);
    const opacityValue = useSharedValue(0);
    const animatedStyles = useAnimatedStyle(()=>{

        return {
            transform: [{ translateY: offset.value }],
            opacity: opacityValue.value
        };
    });

    useEffect(() => {
    
        onAppear();
    
    }, []);

    const onAppear = () => {
    
        //  to start the moving up and down animation
        offset.value = withSequence(
            withTiming(-10, { duration: 400 }),
            withTiming(5, { duration: 200 }),
            withTiming(-5, { duration: 200 }),
            withTiming(0, { duration: 200 }),
        );

        //  to fade in the newly created note
        opacityValue.value = withTiming(1, { duration: 400});
    }

    return(<Animated.View style={[animatedStyles]} className="px-5 py-5 my-1 mx-5 border-b-blue-200 border-b-0.5 flex flex-row">
        <View className="flex flex-col pr-10">
            <Text>{props.title}</Text>
            <Text>{props.content}</Text>
        </View>
    </Animated.View>);

};

const styles = StyleSheet.create({

});
export default NoteItem;