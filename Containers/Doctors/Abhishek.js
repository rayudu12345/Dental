'use strict';

import React , { Component } from 'react';

import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import SharedStyles from '../../Style/SharedStyles';

export default class Abhishek extends Component{
  render(){
    return(
      <ScrollView style = {SharedStyles.container}>
      <View>
        <Text style={SharedStyles.heading2}>Name</Text><Text style = {SharedStyles.doctorInfo}>Dr. Abhishek Singh</Text>
      </View>
      <View>
        <Text style={SharedStyles.heading2}>Qualification</Text><Text style = {SharedStyles.doctorInfo}>MDS</Text>
      </View>
      <View>
        <Text style={SharedStyles.heading2}>Speciality</Text><Text style = {SharedStyles.doctorInfo}>Oral and Maxillofacial Surgeon</Text>
      </View>
      <View>
        <Text style={SharedStyles.heading2}>NMC Registration</Text><Text style = {SharedStyles.doctorInfo}>005328-13</Text>
      </View>
      <View>
        <Text style={SharedStyles.heading2}>Duty Time</Text><Text style = {SharedStyles.doctorInfo}>9:00AM - 7:00PM</Text>
      </View>
      <View>
        <Text style={SharedStyles.heading2}>Leave Day</Text><Text style = {SharedStyles.doctorInfo}>Thursday</Text>
      </View>
      <View>
        <Text style={SharedStyles.heading2}></Text><Text style = {SharedStyles.doctorInfo}></Text>
      </View>
      </ScrollView>
    )
  }
}
