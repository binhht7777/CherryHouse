import React, { Component } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';

class MyText extends Component {
   render() {
      return (
         <View style={styles.SectionStyle}>
            {/* <Image
               source={this.props.icon}
               style={styles.ImageStyle}
            /> */}
            <Text>
               {this.props.text}
            </Text>
         </View>
      )
   }
}

export default MyText;


const styles = StyleSheet.create({
   SectionStyle: {
      flexDirection: 'row',
      marginBottom: 48,
      marginHorizontal: 30,
      backgroundColor: 'white'

   },
   ImageStyle: {
      padding: 10,
      margin: 5,
      height: 30,
      width: 30,
      resizeMode: 'stretch',
      alignItems: 'center',
   },
   inputTitle: {
      color: '#2F4F4F',
      fontSize: 13,
      textTransform: 'uppercase'
   }
});