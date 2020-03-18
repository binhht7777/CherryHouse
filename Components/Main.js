import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Main extends Component {

   render() {
      return (
         <View style={Styles.container}>
            <Text> Main </Text>
         </View>
      );
   }
}

export default Main;

const Styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
   }
})