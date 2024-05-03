import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function inputs({text, funcion}) {

    return (
        <>
            <TouchableOpacity
                style={styles.boton}
                onPress={funcion}
            >
                <Text style={{ textAlign: 'center' }}>{text}</Text>
            </TouchableOpacity>

        </>
    );

}

const styles = StyleSheet.create({
    boton: {
        backgroundColor: '#60B2E5',
        color: 'white',
        width: 150,
        padding: 10,
        margin: 5,
        borderRadius: 20,
      }
});