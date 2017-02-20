'use strict';

import React , { Component } from 'react';
import {List, ListItem, Text } from 'native-base';
import Spinner from './Spinner';
import {
  Navigator,
  AppRegistry,
  View,
  Dimensions,
  Linking,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import SharedStyles from '../Style/SharedStyles';
import striptags from 'strip';
export default class About extends Component{
constructor(){
  super()
  this.state={
    data:'',
    loaded:false,
    message:'',
  }
}


componentWillMount(){
  fetch('http://www.himaldental.com.np/wp-json/posts/2230')
  .then((response)=>response.json())
  .then((responseData)=>{
    this.setState({
        data:striptags(responseData.excerpt).replace('&nbsp;',''),
        loaded:true
    })

  })
  .catch((error)=>{
    this.setState({
      message:'Please Check Your Connection'
    })
  })
}

  render(){
    var about=''
    if(this.state.loaded){
      about=  <Text  style = {SharedStyles.content}>
                {this.state.data}
              </Text>

    }else{
      about= <Spinner size='large'/>
    }
    return(
      <ScrollView style = {SharedStyles.container}>
      <View>
        {about}
      </View>
      </ScrollView>
    )
  }
}
