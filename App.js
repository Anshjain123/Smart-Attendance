import React from "react";
import AttendenceBox from "./app/screens/AttendanceBoxScreen";
import RegistrationForm from "./app/screens/RegistrationFormScreen";
import TryAgain from "./app/screens/TryAgainScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraScreen from "./app/screens/CameraScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}

        />
        <Stack.Screen name="New Registration" component={RegistrationForm} />
        <Stack.Screen name="Try Again" component={TryAgain} />
        <Stack.Screen name="Attendance Record" component={AttendenceBox} />
        <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
