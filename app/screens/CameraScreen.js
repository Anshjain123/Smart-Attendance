import { View, Text } from 'react-native'
import { Camera, CameraPermissionStatus } from 'react-native-vision-camera';
import React, { useCallback, useEffect, useState } from 'react'
import WelcomeScreen from './WelcomeScreen';

function CameraScreen() {
    const devices = useCameraDevices()
    const device = devices.back

    return (
        <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
        />
    )
}

export default CameraScreen