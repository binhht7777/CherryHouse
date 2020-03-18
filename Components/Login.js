import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image, StatusBar, LayoutAnimation, ActiveIndicator } from 'react-native';

// import Image
import imgUser from '../assets/images/icoUser.png';
import imgPass from '../assets/images/icoPass.png';
import imgBackground from '../assets/images/Cherry3.png';

//Import Control
import MyTextInput from '../Components/Control/MyTextInput';
import MyTouchableOpacity from '../Components/Control/MyTouchableOpacity';
import MyColors from '../Components/Control/MyColors';

import { firebaseApp } from './FireBaseConfig';

class Login extends Component {


   static navigationOptions = {
      header: null
   }

   state = {
      email: '',
      password: '',
      errorMessage: ''
   }


   _handleLogin = () => {
      var _email = this.state.email;
      var _password = this.state.password;
      console.log(_email + _password);
      if ((typeof (_email) === 'undefined' || _email === "") || (typeof (_password) === 'undefined' || _password === "")) {
         this.setState({ errorMessage: 'Enter UserName And Password' })
         //alert("Enter UserName And Password");
      } else {
         firebaseApp.auth().signInWithEmailAndPassword(_email, _password)
            .then(() =>
               Alert.alert(
                  'Alert Title',
                  'Login Successful ',
                  [
                     { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                     {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                     },
                     { text: 'OK', onPress: () => this.props.navigation.push('Home') },
                  ],
                  { cancelable: false },
               ),
               this.setState({
                  email: "",
                  password: ""
               })
            )
            .catch(error => this.setState({ errorMessage: error.message }));
      }
   }
   render() {
      //LayoutAnimation.easeInEaseOut();
      return (
         <View style={styles.container}>
            <View style={{
               justifyContent: 'center', alignItems: 'center', marginTop: 0, alignContent: 'space-between',
               flexDirection: 'row'
            }}>
               <Image source={imgBackground} style={{
                  resizeMode: 'stretch', height: 150, width: 250, alignSelf: 'center', marginTop:30
               }} />
               {/* <Text style={styles.greeting}>
                  {`Welcome`}
               </Text> */}
            </View>


            <View style={styles.errorMessage}>
               <Text style={styles.error}>{this.state.errorMessage}</Text>
            </View>
            {/* text input */}
            <View style={styles.form}>
               <Text style={styles.inputTitle}>
                  Email Address
               </Text>

               <MyTextInput
                  autoCapitalize={'none'}
                  icon={imgUser}
                  onChangeText={(email) => this.setState({ email })}
                  value={this.state.email}
               />

               <View style={{ marginTop: 32 }}>

                  <Text style={styles.inputTitle}>
                     Password
                  </Text>
                  <MyTextInput
                     autoCapitalize={'none'}
                     icon={imgPass}
                     onChangeText={(password) => this.setState({ password })}
                     value={this.state.password}
                     secureText={true}
                  />

               </View>
            </View>

            {/* touchableopacity */}
            <MyTouchableOpacity
               title={"Sign In"}
               backgroundColor={MyColors.PinkLight}
               onPress={() => { this._handleLogin() }}
            />
            <TouchableOpacity style={styles.buttonNew}
               onPress={() => this.props.navigation.navigate("Register")}
            >
               <Text style={{ color: MyColors.DarkSlateGray, fontSize: 15 }}>
                  New to SocialApp?<Text style={{ fontWeight: '500', color: '#E9446A' }}>Sign Up</Text>
               </Text>
            </TouchableOpacity>

         </View >
      )
   }
}

export default Login;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#FFF',

   },
   greeting: {
      color: MyColors.PinkLight,
      marginTop: 32,
      fontSize: 50,
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
      fontSize: 15,
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