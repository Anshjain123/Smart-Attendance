import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Button } from 'react-native';

function AttendenceBox() {
    return (
        <View>
            <Text style={styles.AttendenceBox}>Your Previous Attendance records</Text>
            <TextInput style={styles.prevRec} />
            <View style={styles.button}>
                <Button title='Exit' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    AttendenceBox: {
        paddingTop: 50,
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    prevRec: {
        width: '90%',
        height: "70%",
        marginTop: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        alignSelf: 'center',
    },
    button: {
        width: "30%",
        borderRadius: 5,
        paddingTop: 40,
        alignSelf: 'flex-end',
        marginRight: 20,
    },
})
export default AttendenceBox