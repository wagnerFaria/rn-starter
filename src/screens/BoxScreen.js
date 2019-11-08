import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyleOne}>Child #1</Text>
            <Text style={styles.textStyleTwo}>Child #2</Text>
            <Text style={styles.textStyleThree}>Child #3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200
    },
    textStyleOne: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 1
    },
    textStyleTwo: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 1
    },
    textStyleThree: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 1
    }
})


export default BoxScreen;
