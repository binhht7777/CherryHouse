import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

class MyTouchableOpacity extends Component {
   constructor(props) {
      super(props);
      this.state = {
         bColor: this.props.backgroundColor
      }
   }

   render() {
      return (
         <TouchableOpacity
            style={[styles.button, { backgroundColor: this.state.bColor }]}
            onPress={this.props.onPress}
         >
            <Text style={styles.text}>{this.props.title}</Text>
         </TouchableOpacity>
      );
   }
}

export default MyTouchableOpacity;


const styles = StyleSheet.create({
   button: {
      marginHorizontal: 30,
      //backgroundColor: '#E9446A', //'#E9446A'
      borderRadius: 4,
      height: 52,
      alignItems: 'center',
      justifyContent: 'center'

   },
   text: {
      color: '#FFF',
      fontWeight: '500',
      fontSize: 16
   },
});