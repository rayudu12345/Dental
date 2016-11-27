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

export default class Dipesh extends Component{
  render(){
    return(
      <ScrollView style = {SharedStyles.container}>
      <View>
        <Text style={SharedStyles.heading2}>Name</Text><Text style = {SharedStyles.doctorInfo}>Dr. Dipesh Awasti</Text>
      </View>
      <View>
        <Text style={SharedStyles.heading2}>Qualification</Text><Text style = {SharedStyles.doctorInfo}>BDS</Text>
      </View>
      <View>
        <Text style={SharedStyles.heading2}>Speciality</Text><Text style = {SharedStyles.doctorInfo}>Dental Surgeon</Text>
      </View>
      <View>
        <Text style={SharedStyles.heading2}>NMC Registration</Text><Text style = {SharedStyles.doctorInfo}>2855</Text>
      </View>
      <View>
        <Text style={SharedStyles.heading2}>Duty Time</Text><Text style = {SharedStyles.doctorInfo}>11:00AM - 7:00PM</Text>
      </View>
      <View>
        <Text style={SharedStyles.heading2}>Leave Day</Text><Text style = {SharedStyles.doctorInfo}>Saturday</Text>
      </View>
      </ScrollView>
    )
  }
}
