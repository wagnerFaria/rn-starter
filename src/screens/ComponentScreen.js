import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const myName = "Wagner Faria do Amaral";
    return (
        <View style={styles.firstView}>
            <Text style={styles.textStyleGreeting}>Greeting started with React Native!</Text>
            <Text style={styles.textPresentation}>My Name is {myName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    firstView: {
        paddingHorizontal: 10
    },
    textStyleGreeting: {
        fontSize: 45
    },
    textPresentation: {
        fontSize: 20
    }
});

export default ComponentsScreen;
