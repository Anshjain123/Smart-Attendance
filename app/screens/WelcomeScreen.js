import { StyleSheet, Text, View, SafeAreaView, StatusBar, Platform, TouchableOpacity } from "react-native";
import React from "react";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { NavigationContainer } from "@react-navigation/native";

export default function WelcomeScreen({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                <View>
                    <Text style={styles.heading}>Welcome</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
            </View>
            <View style={styles.first}>
                <TouchableOpacity style={styles.firstbuttons}>
                    < Text style={styles.innerText}> About Us</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.firstbuttons}>
                    < Text style={styles.innerText}> Contact Admin</Text>
                </TouchableOpacity >
            </View>
            <Text style={styles.heading}>Please Mark your attendance here</Text>
            <View style={styles.second}>
                <TouchableOpacity style={styles.secondbuttons} onPress={() => navigation.navigate('Camera')}>
                    < Text style={styles.innerText}  >Mark attendance</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.secondbuttons} onPress={() => navigation.navigate('New Registration')}>
                    < Text style={styles.innerText}>New Registration</Text>
                </TouchableOpacity >

            </View>

            <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
                <TouchableOpacity style={styles.roundedbuttons}>
                    <Text style={styles.innerText} >chat bot</Text>
                </TouchableOpacity >
            </View>

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    heading: {
        fontSize: 30,
        color: "#051367",
        fontWeight: "700",
        textAlign: 'center',
        textTransform: 'capitalize',
    },
    innerText: {
        color: "white",
        fontSize: 17,
        textTransform: 'capitalize',
    },
    firstbuttons: {
        height: 55,
        width: "45%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0E3EDA",
        borderRadius: 20,
    },
    secondbuttons: {
        height: 100,
        width: "45%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0E3EDA",
        borderRadius: 40,
    },
    roundedbuttons: {
        height: 100,
        borderRadius: 100,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0E3EDA",
    },
    first: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 25,
        marginBottom: 50,
    },
    second: {
        marginTop: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    }
});
