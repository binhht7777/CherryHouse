import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image } from 'react-native';


import imgBackground from '../assets/images/Cherry3.png';
import MyTextInput from '../Components/Control/MyTextInput';
import MyTouchableOpacity from '../Components/Control/MyTouchableOpacity';
import MyColors from '../Components/Control/MyColors';
import { Ionicons } from '@expo/vector-icons';
import MyAlert from './Control/MyAlert';

import { firebaseApp } from './FireBaseConfig';
import * as Font from 'expo-font';

class Register extends Component {
   state = {
      name: '',
      email: '',
      password: '',
      errorMessage: ''
   }

   _handleSignUp = () => {
      var _email = this.state.email;
      var _password = this.state.password;
      var _name = this.state.name;

      console.log(_email + _password);
      if ((typeof (_email) === 'undefined' || _email === "") || (typeof (_password) === 'undefined' || _password === "")) {
         this.setState({ errorMessage: 'Enter UserName And Password' })
         //alert("Enter UserName And Password");
      } else {
         firebaseApp.auth().createUserWithEmailAndPassword(_email, _password)
            .then(userCredentials => {
               return userCredentials.user.updateProfile({
                  displayName: _name
               }),
                  Alert.alert(
                     'Information',
                     'Registration Successful',
                     [
                        {
                           text: 'Cancel',
                           onPress: () => console.log('Cancel Pressed'),
                           style: 'cancel',
                        },
                        { text: 'OK', onPress: () => this.props.navigation.push('Home') },
                     ],
                     { cancelable: false }
                  ),
                  this.setState({
                     userName: '',
                     passWord: ''
                  })
            })
            .catch(error => this.setState({ errorMessage: error.message }));

      }
   }
   render() {
      return (
         <View style={styles.container}>
            <View style={{
               justifyContent: 'center', alignItems: 'center', marginTop: 0, alignContent: 'space-between',
               flexDirection: 'row'
            }}>
               <Image source={imgBackground} style={{
                  resizeMode: 'stretch', height: 150, width: 250, alignSelf: 'center', marginTop: 30
               }} />
               {/* <Text style={styles.greeting}>
                  {`Register`}
               </Text> */}
            </View>
            <View style={styles.errorMessage}>
               <Text style={styles.error}>{this.state.errorMessage}</Text>
            </View>
            {/* text input */}
            <View style={styles.form}>
               <Text style={styles.inputTitle}>
                  Full Name
               </Text>
               <MyTextInput
                  placeHolder={"Enter FullName"}
                  autoCapitalize={'none'}
                  // icon={null}
                  onChangeText={(name) => this.setState({ name })}
                  value={this.state.name}
               />
               <View style={{ marginTop: 32 }}>
                  <Text style={styles.inputTitle}>
                     Email Address
               </Text>

                  <MyTextInput
                     placeHolder={"Enter Email"}
                     autoCapitalize={'none'}
                     //icon={imgUser}
                     onChangeText={(email) => this.setState({ email })}
                     value={this.state.email}
                  />
               </View>


               <View style={{ marginTop: 32 }}>

                  <Text style={styles.inputTitle}>
                     Password
                  </Text>
                  <MyTextInput
                     placeHolder={"Enter Password"}
                     autoCapitalize={'none'}
                     //icon={imgPass}
                     onChangeText={(password) => this.setState({ password })}
                     value={this.state.password}
                     secureText={true}
                  />

               </View>
            </View>

            {/* touchableopacity */}
            <MyTouchableOpacity
               title={"Sign Up"}
               backgroundColor={MyColors.PinkLight}
               onPress={() => { this._handleSignUp() }}
            />


         </View >
      )
   }
}

export default Register;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#FFF'
   },
   greeting: {
      color: MyColors.PinkLight,
      marginTop: 32,
      fontSize: 30,
      fontWeight: '400',
      textAlign: 'center',
      fontWeight: '800'
   },
   errorMessage: {
      height: 72,
      justifyContent: 'center',
      marginHorizontal: 30
   },
   error: {
      color: MyColors.Blue,
      fontSize: 16,
      fontWeight: '600',
      textAlign: 'center'
   },
   form: {
      marginBottom: 48,
      marginHorizontal: 30
   },
   inputTitle: {
      color: MyColors.DarkSlateGray,
      fontSize: 16
   },
   buttonNew: {
      alignSelf: 'center',
      marginTop: 32
   }
})