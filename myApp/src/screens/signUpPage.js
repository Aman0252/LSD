import { color } from '@rneui/base';
import React, { useState, useRef } from 'react'; 
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { View, Text, TextInput, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { CheckBox } from '@rneui/base';
import { ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendarDays, height } from '@fortawesome/free-solid-svg-icons/faCalendarDays';
import { mdiCheckboxOutline } from '@mdi/js';
import Icon from '@mdi/react';



const SignupPage = ({navigation}) => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [dob, setDob] = useState('');
    const [error, setError] = useState("");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [signupdata,  setSignupdata] = useState({})
    const [checked, setChecked] = useState(true);
    const toggleCheckbox = () => setChecked(!checked);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
      const validateEmail = (email) => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        console.log(emailPattern.test(email),'bbbbbbbbbbbb')
        return emailPattern.test(email);
      };    
    
      const handleConfirm = (name, date) => {
        hideDatePicker();
        setSignupdata((data) => {
            const obj = {...data} 
            obj[name] = date.toDateString()
            return obj
        })
      };
      const handleSubmit = ()=>{
        console.log('-----------------------', name, signupdata.email)

        if(!signupdata?.name) return setError('Name is required')
        if(!signupdata?.email) return setError('Email is required')
        if(!validateEmail(signupdata?.email)){ console.log('aaaaaaaaaa') 
        return setError('Email is not valid')}
        if(!signupdata?.dob) return setError('DOB is required')

        navigation.navigate('Dashboard');

        // if (name?.current == '') {
        //     // Valid phone number, navigate to OTP screen
        //     // navigation.navigate('Dashboard');
        //     // otpInput.setValue("")
        //   }
        //   else if(email?.current) {
        //     setError('Please enter a email');
        //   }else {
        //     // Invalid phone number
        //     setError('Please enter a email ');
        //   }
      }

    const handleSignUp = () => {
        // You can add form submission logic here.
        // Access the form data using the state variables.
    }

    const handleChange = (name, value) => {
        console.log('im a called')
        setSignupdata((data) => {

            const obj = {...data}
            obj[name] = value

            return obj
        })
    }

    return (
        <View style={styles.container} >
            <ImageBackground     blurRadius={5}
 resizeMode="cover" style={{height:"100%"}} source={require('../assests/images/signupBackground.jpg')}>
            <View style={{backgroundColor: 'rgba(255, 255, 255, 0.9)',
 margin:30, paddingVertical:35,marginTop:150, borderRadius:20}}>
            <View  >
            <Text style={styles.textSignUp}>Sign Up</Text>
            </View>
            <Text style={{color:'red', textAlign:'center', marginVertical:10}}>{error}</Text>
            <TextInput style={styles.inputView}
                placeholder="Name"
                value={signupdata.name}
                onChangeText={(value) => handleChange('name', value)}
            />
            
            <TextInput style={styles.inputView}
                placeholder="Email"
                value={signupdata.email}
                onChangeText={(value) => handleChange('email', value)}
            />
            <View>
                        <View style={[styles.inputView,{height:50, padding:0}]}>
                            <TextInput
                                editable={false}
                                style={{color:'black'}}
                                placeholder="Date of Birth"
                                value={signupdata.dob}
                            />
                            <TouchableOpacity  style={styles.calendarIcon} onPress={()=>showDatePicker()}>
                            <FontAwesomeIcon size={18} icon={faCalendarDays} onPress={()=>showDatePicker()}  style={{color:'gray'}}/>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={(value) => handleConfirm('dob', value)}
                                onCancel={hideDatePicker}
                            />
                        </View>
                    </View>
                    <CheckBox
      checked={checked}
      checkedColor="#0F0"
      checkedTitle="Great!"
      containerStyle={{ width: "75%" }}
      onIconPress={() => setChecked(!checked)}
      onLongIconPress={() =>
        console.log("onLongIconPress()")
      }
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => console.log("onPress()")}
      size={30}
      textStyle={{}}
      title="Check for Awesomeness"
      titleProps={{}}
      uncheckedColor="#F00"
    />
                    {/* <CheckBox
                    title={'I accept Terms and Conditions'}
           checked={checked}
           onPress={toggleCheckbox}
           iconType="material-community"
           checkedIcon="checkbox-marked"
           uncheckedIcon="checkbox-blank-outline"
           checkedColor="red"
         /> */}
            {/* <CheckBox
                title="I accept Terms and Conditions"
                value={acceptTerms}
                onValueChange={setAcceptTerms}
            /> */}
<TouchableOpacity style={{display:"flex",marginTop:25,alignSelf:"center", height:50,width:200, borderRadius:50, alignItems:"center"}} onPress={handleSubmit}>
    <LinearGradient colors={["#FF9800", "#F44336"]} 
    style={[styles.linearGradient,{borderRadius:50}]} 
    start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
        <Text style={styles.buttonText}> Submit </Text>
 </LinearGradient>
 </TouchableOpacity>
        </View>
        </ImageBackground>
        </View>
    );
}

export default SignupPage;

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#006A4E,",
    display:"flex",
    position: "relative",
      justifyContent: "center",
      height:"100%"
    },
    inputView: {
    //   flex:1,
      // backgroundColor: "#006A4E",
      borderRadius: 15,
      borderColor: '#527a7a',
      width: "75%",
      padding:10,
      height: 50,

      marginTop: 20,
      // alignItems: "center",
      alignSelf:'center',
      borderWidth : 2,
    },
    textSignUp: {
        textAlign:"center",
        fontSize:38,
        color:"black",
        fontFamily:"o"

    },
    calendarIcon: {
        position: 'absolute',
        // alignSelf:'center',
        // alignItems:'center',
        right: 20, // Adjust this value to control the icon's position
        top:13,
        // color:'gray',
        height:50,
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
      margin: 11,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });