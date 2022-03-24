import { Text, Button, StyleSheet, Platform, View, SafeAreaView, StatusBar } from 'react-native'
import React, { Component } from 'react';

export default function TryAgain() {
    return (
        <SafeAreaView style={styles.container} >
            <Text style={styles.innerText}>sorry your face was not detected within 30 Secs.Kindly choose any option from the given options</Text>
            <Button style={styles.button} title='Try Again' />
            <Button title='Contact Admin' />
            <Button title='Troubleshoot' />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "80%",
        marginLeft: "10%",
        top: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    innerText: {
        fontSize: 20,
        fontWeight: '700',
        textTransform: 'capitalize',
    },

})