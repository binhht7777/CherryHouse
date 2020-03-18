import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native'

class MyTextInput extends Component {
   render() {
      let IMG;
      if (this.props.icon != null) {
         IMG = <Image
            source={this.props.icon}
            style={styles.ImageStyle}
         />
      } else {
         IMG = null;
      }
      return (
         <View style={styles.SectionStyle}>
            {IMG}

            <TextInput
               style={{ flex: 1, fontSize: 16, color: '#2F4F4F' }}
               placeholder={this.props.placeHolder}
               underlineColorAndroid="transparent"
               onChangeText={this.props.onChangeText}
               value={this.props.value}
               secureTextEntry={this.props.secureText}
               autoCapitalize={this.props.autoCapitalize}
            />
         </View>
      );
   }
}
export default MyTextInput;


const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "white"
   },
   SectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      height: 50,
      borderBottomColor: '#2F4F4F',
      borderBottomWidth: StyleSheet.hairlineWidth,
      color: '#2F4F4F'
   },
   ImageStyle: {
      padding: 10,
      margin: 5,
      height: 30,
      width: 30,
      resizeMode: 'stretch',
      alignItems: 'center'
   },
});