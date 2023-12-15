import React ,{useState, useRef}from "react";
import {View, Text,Image, TextInput ,StyleSheet, TouchableOpacity} from 'react-native'
import PhoneInput from "react-native-phone-number-input";
import LinearGradient from 'react-native-linear-gradient';


const Login = ({navigation}) =>{

  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [value, setValue] = useState("");
  const phoneInput = useRef(null);

  const handleGetOTP = () => {
    console.log('==================',phoneInput)
    if (phoneInput?.current?.state.number.length == 10) {
      // Valid phone number, navigate to OTP screen
      navigation.navigate('Otp');
    }
    else if(phoneInput?.current?.state.number.length == 0) {
      setError('Please enter a phone number');
    }else {
      // Invalid phone number
      setError('Please enter a valid phone number');
    }
  }

  handlePress=()=>{
    console.log('Button Clicked')
  }
  return(
    <View style={{alignSelf:'center',alignItems: 'center',}}>
     <Image style={{alignSelf:'center',marginTop:150, width:330, height:112}} source={require('../assests/images/LSD_Black_LogoII.png')}/>
    <View style={{marginTop: 40, marginBottom:40}}>
    <PhoneInput
            style={{alignSelf:'center',marginTop:200, width:500, height:100}}
            ref={phoneInput}
            defaultValue={value}
            defaultCode="IN"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
              setError('');
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
          /> 
          <Text style={{color:'red', textAlign:'center', marginTop:10}}>{error}</Text>
    </View>
    <TouchableOpacity style={{height:50,width:230, borderRadius:50, alignItems:"center"}} onPress={handleGetOTP}>
    <LinearGradient colors={["#FF9800", "#F44336"]} 
    style={[styles.linearGradient,{borderRadius:50}]} 
    start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
        <Text style={styles.buttonText}> Get OTP </Text>
 </LinearGradient>
 </TouchableOpacity>
    </View>

  )
}

export default Login


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