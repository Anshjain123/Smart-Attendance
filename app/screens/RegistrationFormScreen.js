import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native';
// import RegistrationForm from './app/screens/RegistrationForm';
function RegistrationForm() {
  return (
    <View style={styles.Registration}>
      <Text style={styles.heading}>Registration Form</Text>
      <Text style={styles.name}>Name</Text>
      <TextInput style={styles.nameinput}
        placeholder='name'

      />
      <Text style={styles.Email}>Email</Text>
      <TextInput style={styles.nameinput}
        autoCompleteType="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder="Email"
      />
      <Text style={styles.Password}>Password</Text>
      <TextInput style={styles.nameinput}
        secureTextEntry
        autoCompleteType="password"
        placeholder="Password (Atleast of length 5)"
      />
      <Text style={styles.Password}>Phone No.</Text>
      <TextInput style={styles.nameinput}
        placeholder='Phone No.'
        keyboardType='decimal-pad'
        keyboardAppearance='dark'
      />
      <Text style={styles.Password}>Date Of Birth</Text>
      <TextInput style={styles.nameinput}
        placeholder='DD/MM/YYYY'
        keyboardType='decimal-pad'
        keyboardAppearance='dark'
      />
      {/* <TouchableOpacity style={{ height: 100, padding:45,  }}>
                <Text>My button</Text>
            </TouchableOpacity> */}
      <View style={styles.button}>
        <Button title='Capture Your Image' />

      </View>
      <View style={styles.button}>
        <Button title='Submit' />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  Registration: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  heading: {
    paddingTop: 40,
    fontSize: 30,
    alignSelf: 'center',
    borderBottomWidth: 1,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 50,
    paddingTop: 50,
  },

  nameinput: {
    width: '70%',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    marginLeft: 50,
    paddingLeft: 5,
    color: 'black'

    // color:'black',
    // backgroundColor:'white',
  },
  Email: {
    paddingLeft: 50,
    paddingTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  Password: {
    paddingLeft: 50,
    paddingTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    width: "40%",
    borderRadius: 5,
    paddingTop: 40,
    paddingLeft: 50
  }
})
export default RegistrationForm