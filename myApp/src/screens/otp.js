import React, { useRef, useState } from 'react';
import { View, Text, Button } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import SignupPage from './signUpPage';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Otp = ({navigation}) => {
    const [error, setError] = useState("");
    let otpInput = useRef(null);

    const clearText = () => {
        console.log("==========================", otpInput)
        otpInput.current.clear();
    }

    const setText = () => {
        otpInput.current.setValue("1234");
    }

    const handleOTP = () => {
        console.log('==================',otpInput.state.otpText.length)
        if (otpInput?.state.otpText.length == 6) {
          // Valid phone number, navigate to OTP screen
          navigation.navigate('Sign Up');
          otpInput.setValue("")
        }
        else if(otpInput?.state.otpText == '') {
          setError('Please enter a OTP');
        }else {
          // Invalid phone number
          setError('Please enter a valid OTP');
        }
      }

    return (
        <View style={styles.container}>
            <View style={{backgroundColor:"white",borderRadius:20 , marginBottom:150}}>
            <View style={{width:'100%', paddingHorizontal:35,paddingVertical:50}}>
            <View  >
            <Text style={styles.textSignUp}>Please Enter OTP</Text>
            </View>
          
            <Text style={{color:'red', textAlign:'center', marginVertical:10}}>{error}</Text>
            <OTPTextInput ref={e => (otpInput = e)} inputCount={6} style={styles.otpInput}/>
            </View>
            <View style={{ display:"flex", alignSelf:"center"}}>
            <TouchableOpacity style={styles.submitButton} onPress={handleOTP}>
    <LinearGradient colors={["#FF9800", "#F44336"]} 
    style={[styles.linearGradient,{borderRadius:50}]} 
    start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
        <Text style={styles.buttonText}> SUBMIT </Text>
    </LinearGradient>
    </TouchableOpacity></View>
        </View>
        </View>
    )
}

export default Otp;

const styles = StyleSheet.create({
    container: {
        display:"flex",
      justifyContent: 'center',
      alignItems: 'center',
      height:"100%",
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center',
    },
    textSignUp: {
        textAlign:"center",
        fontSize:20,
    },
    otpInput: {
    //   marginTop:100,
    alignItems: 'center',
    justifyContent:'center',
      width: 45,
      height: 50,
      borderRadius:15,
      borderWidth:2,
    //   borderBottomWidth: 2,
      textAlign: 'center',
      fontSize: 20,
      margin: 3.5,

    },
    submitButton: {
        height:48,
        width:170,
        alignItems:"center",
        marginBottom:40
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: '#ffffff',
        marginTop:10,
        backgroundColor: 'transparent',
      },
      linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        width:'80%',
      },
  });