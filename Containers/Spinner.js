import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Image,
  Alert,
  Navigator,
  ActivityIndicator
} from 'react-native';

export default class Spinner extends Component{
  constructor(){
    super()

  }
  render(){
    return(
        <View style={styles.spinnerStyle}>
          <ActivityIndicator size={this.props.size || 'small'}/>
        </View>
    )
  }
}
const styles = StyleSheet.create({
  spinnerStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
});
