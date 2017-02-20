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
import Spinner from '../Spinner';
import SharedStyles from '../../Style/SharedStyles';
import {Actions} from 'react-native-router-flux';
export default class DoctorProfile extends Component{
  constructor(props){
    super(props)
    this.state = {
      name:'',
      qualification:'',
      speciality:'',
      nmc_registration:'',
      duty_time:'',
      leave_day:'',
      remark:'',
      loaded:false,
    }
  }
  componentWillMount(){
      fetch('http://www.himaldental.com.np/himal/doctors.php?id='+this.props.id,{method:'GET'})
      .then((response)=>response.json())
      .then((responseData)=>{

        this.setState({
          name:responseData[0].data[0].name,
          qualification:responseData[0].data[0].qualification,
          speciality:responseData[0].data[0].speciality,
          nmc_registration:responseData[0].data[0].nmc_registration,
          duty_time:responseData[0].data[0].duty_time,
          leave_day:responseData[0].data[0].leave_day,
          remark:responseData[0].data[0].remark,
          loaded:true,
        })

      })
  }
  render(){
    if(this.state.loaded){
      return(
        <ScrollView style = {SharedStyles.container}>
        <View>
          <Text style={SharedStyles.heading2}>Name</Text><Text style = {SharedStyles.doctorInfo}>{this.state.name}</Text>
        </View>
        <View>
          <Text style={SharedStyles.heading2}>Qualification</Text><Text style = {SharedStyles.doctorInfo}>{this.state.qualification}</Text>
        </View>
        <View>
          <Text style={SharedStyles.heading2}>Speciality</Text><Text style = {SharedStyles.doctorInfo}>{this.state.speciality}</Text>
        </View>
        <View>
          <Text style={SharedStyles.heading2}>NMC Registration</Text><Text style = {SharedStyles.doctorInfo}>{this.state.nmc_registration}</Text>
        </View>
        <View>
          <Text style={SharedStyles.heading2}>Duty Time</Text><Text style = {SharedStyles.doctorInfo}>{this.state.duty_time}</Text>
        </View>
        <View>
          <Text style={SharedStyles.heading2}>Leave Day</Text><Text style = {SharedStyles.doctorInfo}>{this.state.leave_day}</Text>
        </View>
        <View>
          <Text style={SharedStyles.heading2}>Remarks</Text><Text style = {SharedStyles.doctorInfo}>{this.state.remark}</Text>
        </View>
        </ScrollView>
      )
    }
    else{
      return(
        <Spinner size="large"/>
      )
    }
}
}
