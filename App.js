import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import {} from  './styles'
//import Login from './pages/Login'
import Routes from './routes'

import {UserProvider} from './context/user'

import './services/firebase'

export default function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
