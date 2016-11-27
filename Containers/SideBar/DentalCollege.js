'use strict';

import React , { Component } from 'react';
import {List, ListItem, Text } from 'native-base';

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

import SharedStyles from '../../Style/SharedStyles';

export default class DentalCollege extends Component{
  render(){
    return(
      <ScrollView style = {SharedStyles.container}>
      <View>
        <Text style= {SharedStyles.heading1}>Himal Institute of Dental Sciences</Text>
        </View>
        <View>
        <Text style = {SharedStyles.content}>
        Himal Institute of Dental Sciences  was established in 2008 with a motive of producing qualified dental manpowers
         to bridge the gap between the dental service providers and the service seekers. Currently, the institution
          operates three types of academic courses in Dental Science, Dental Nursing (Assistant) Training and
          Dental Lab Mechanics training. We are extending our courses to BDS (Bachelor in Dental Surgery)
          and BDH (Bachelor in Dental Hygiene) in near  our  future.
          </Text>
      </View>
      <View>
        <Text style= {SharedStyles.heading2}>Courses Offered</Text>
        </View>
        <View>
        <Text style = {SharedStyles.content}>
            1. Certificate in Dental Science (3 years) {'\n'}
            2. Dental Lab Technicians (1 year) {'\n'}
            3. Dental Nursing (6 months) {'\n'}
            4. Dental Chairside Assistant (6 months) {'\n'}
          </Text>
      </View>
      </ScrollView>
    )
  }
}
