/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

import ImageSlider from 'react-native-image-slider';



const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;


export default class SliderImage extends Component {
  constructor(props) {
   super(props);

   this.state = {
       position: 1,
       interval: null,

   };
 }

   componentWillMount() {
       this.setState({interval: setInterval(() => {
           this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
       }, 2000)});
   }

   componentWillUnmount() {
       clearInterval(this.state.interval);
   }

  render() {
    return (
      <View>
      <ImageSlider images={[
       require('../Images/slider1.jpg'),
       require('../Images/slider2.jpg'),
       require('../Images/slider3.jpg')
      ]}
    height={0.35 * deviceHeight}
    position={this.state.position}
    onPositionChanged={position => this.setState({position})}/>
    </View>
    );
  }
}
