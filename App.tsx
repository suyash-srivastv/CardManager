import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import HomeScreen from './src/screens/Home'
import BootSplash from "react-native-bootsplash";
const App = () => {
  useEffect(() => {
    const init = async () => {
      await BootSplash.hide({ fade: true });
    };
    init()
  }, [])

  return (
    <HomeScreen />
  )
}

export default App

