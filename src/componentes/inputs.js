import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function inputs({text, valor_numero, setNumero}) {

    return (
        <>
            <Text>{text}</Text>
            <TextInput
                style={styles.input}
                keyboardType='number-pad'
                placeholder={text}
                value={valor_numero}
                onChangeText={setNumero}
            />

        </>
    );

}


const styles = StyleSheet.create({
    input: {
        backgroundColor: '#A0A6A5',
        width:220,
        padding: 10,
        margin: 5,
        fontSize: 15,
        fontWeight: '900',
        color: 'white'
    }
});