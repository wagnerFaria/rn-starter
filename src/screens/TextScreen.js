import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View>
            <Text style={styles.texto}>Enter name:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text style={styles.texto}>My name is {name}</Text>
            <Text style={styles.texto}>Enter Password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            {password.length < 6 ? <Text style={styles.texto}>Password must be longer than 5 characteres</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    texto: {
        marginHorizontal: 15
    }
});


export default TextScreen
