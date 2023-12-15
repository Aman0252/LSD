import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { View, Text, TextInput, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign'
import SettingsScreen from './setting';
import ProfileScreen from './ProfileScreen';
import HomeScreen from './homeScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const Dashboard = ({navigation}) => {
const handleSetting = () => {
  navigation.navigate('SettingsScreen');
}
    const handleSignUp = () => {
        // You can add form submission logic here.
        // Access the form data using the state variables.
    }
    // const HomeScreen = () => (
    //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //     <Text>Home Screen</Text>
    //   </View>
    // );
    
    // Create a component for the Profile screen
    // const ProfileScreen = () => (
    //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //     <Text>Profile Screen</Text>
    //   </View>
    // );
    
    // Create a component for the Settings screen
 
    
    // Create a Bottom Tab Navigator
    const Tab = createBottomTabNavigator();

    return (
        <GestureHandlerRootView style={{flex: 1}}>
           <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} options={{
      tabBarIcon: 
        
           bar =>
          bar.focused ? (
            <Icon name="home" size={25} color={'tomato'} />
          ) : (
            <Icon name="home" size={25} color={'gray'} />
          )
        
      
    }}/>
    <Tab.Screen name="Profile" component={ProfileScreen}  options={{
      tabBarIcon: 
        
           bar =>
          bar.focused ? (
            <Icon name="user" size={25} color={'tomato'} />
          ) : (
            <Icon name="user" size={25} color={'gray'} />
          )
        
      
    }} />
    <Tab.Screen name="Settings" component={SettingsScreen}  options={{
      tabBarIcon: 
        
           bar =>
          bar.focused ? (
            <Icon name="setting" size={25} color={'tomato'} />
          ) : (
            <Icon name="setting" size={25} color={'gray'} />
          )
        
      
    }}/>
  </Tab.Navigator>
        </GestureHandlerRootView>
    );
}

export default Dashboard;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#006A4E,",
      alignItems: "center",
      // justifyContent: "center",
    },
    inputView: {
      // backgroundColor: "#006A4E",
      borderRadius: 30,
      borderColor: '#000000',
      width: "70%",
      height: 50,
      marginTop: 35,
      // alignItems: "center",
      alignSelf:'center',
      borderWidth : 2,
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
  
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
      alignSelf:'center'
    },
    loginBtn: {
      width: 180,
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 5,
      backgroundColor: "#FFA500",
      alignSelf:'center'
    },
    loginText:{
      height: 100,
      flex: 1,
      padding: 15,
      marginLeft: 0,
      color:"#000000",
      // alignItems: "center",
      alignSelf:'center'
    },
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
      width:'80%',
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });

  