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

export default class Niroj extends Component{
  render(){
    return(
      <ScrollView style = {SharedStyles.container}>
      <View>
        <Text style={SharedStyles.heading2}>Name</Text><Text style = {SharedStyles.doctorInfo}>Dr. Niroj Khanal</Text>
      </View>
      <View>
        <Text style={SharedStyles.heading2}>Qualification</Text><Text style = {SharedStyles.doctorInfo}>BDS</Text>
      </View>
      <View>
        <Text style={SharedStyles.heading2}>Speciality</Text><Text style = {SharedStyles.doctorInfo}>Dental Surgeon</Text>
      </View>
      <View>
        <Text style={SharedStyles.heading2}>NMC Registration</Text><Text style = {SharedStyles.doctorInfo}>17458</Text>
      </View>
      <View>
        <Text style={SharedStyles.heading2}>Duty Time</Text><Text style = {SharedStyles.doctorInfo}>Full Time</Text>
      </View>
      <View>
        <Text style={SharedStyles.heading2}>Leave Day</Text><Text style = {SharedStyles.doctorInfo}>No Leave</Text>
      </View>
      <View>
        <Text style={SharedStyles.heading2}>Remarks</Text><Text style = {SharedStyles.doctorInfo}>Chitwan Branch</Text>
      </View>
      </ScrollView>
    )
  }
}
