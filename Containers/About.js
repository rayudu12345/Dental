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

import SharedStyles from '../Style/SharedStyles';

export default class About extends Component{
  render(){
    return(
      <ScrollView style = {SharedStyles.container}>
      <View>
        <Text  style= {SharedStyles.heading1}>Introduction</Text>
        </View>
        <View>
        <Text  style = {SharedStyles.content}>
        Himal Dental Hospital and Institute of Dental Sciences was established in 2003 A.D. with the aim like its name Himal. Himalaya is range, of height and its covers eastern to far western region of Nepal. So Himal Dental Hospital wants to give
            the quality dental services at optimum height throughout the country to each and every people from Mechi (east) to Mahakali (west). It is a nonprofit non political organization. It is registered and affiliated by Nepal government and ministry of health and population. Its working area is rural people especially to the people, where the modern dental services are not available. The focused groups are the poor,
          marginalized and destitute people, students from the government school, private school, monk and handicapped children.
          A decade of service and dedication has been beneficial to both the service providers as well as service receivers.
          The past review gives us a clear picture of what we have achieved for ourselves, communities and stakeholders.
          There have been numerous obstacles on our way to achieve our dreams but with strong organizational structure and management,
           we have been able to contribute to the community and the nation. Conducting camps and clinics, extending areas and services
         has not merely our aim of institutional promotion but we have aimed for Quality Oral Health for all.
         The new building of Himal dental hospital and institute of dental sciences would be the largest of all providing the sophisticated services in oral health.
         The area of services will be extended and the building will have spacious as well as patient friendly environment.
         </Text>
      </View>
      <View>
        <Text style= {SharedStyles.heading1}>Vision</Text>
        </View>
        <View>
        <Text style = {SharedStyles.content}>
          Himal is run with a vision to provide quality oral health and education to all.
         </Text>
      </View>
      <View>
        <Text style= {SharedStyles.heading1}>Mission</Text>
        </View>
        <View>
        <Text style = {SharedStyles.content}>
          ~ Provide the highest quality dental care as an outstanding hospital chain through exceptional services to our community people in an environment of education, teaching and research.{'\n'}
          ~ Aware people on oral health so as to help in early diagnosis and treatment of diseases at initial stages thus to limit the further complications.{'\n'}
          ~ Develop productive dental human resources as per nation’s need to bridge the existing gap between the dental service providers and the need of the people.{'\n'}
         </Text>
      </View>
      <View>
        <Text style= {SharedStyles.heading1}>Objectives</Text>
        </View>
        <View>
        <Text style = {SharedStyles.content}>
            ~ To provide curative as well as preventive dental services to the community people.{'\n'}
            ~ To establish a network of dental clinics throughout the country to reach to the not reached people.{'\n'}
            ~ To provide charitable services to the needy people of various communities.{'\n'}
            ~ To produce quality dental human resources as per nation’s demand.{'\n'}
         </Text>
      </View>
      <View>
        <Text style= {SharedStyles.heading1}>Salient Features</Text>
        </View>
        <View>
        <Text style = {SharedStyles.content}>
            ~ Having well equipped own hospital with sufficient staffs and patients. {'\n'}
            ~ Well equipped laboratory & library.{'\n'}
            ~ Highly experienced & qualified faculty members.{'\n'}
            ~ Students are posting to different branches of hospitals for clinical field practice (OJT).{'\n'}
            ~ Frequently organized free dental camp in remote areas.{'\n'}
            ~ Practical & scientific based scientific teaching learning methology by foreigner doctors.{'\n'}
            ~ Organize oral & dental health related seminars & conferences.{'\n'}
            ~ Educational tour within an academic year.{'\n'}
            ~ Hostel facilities for boy & girls.{'\n'}
            ~ Job placement in different branches of hospital.{'\n'}
            ~ Quality education in affordable fee.{'\n'}
            ~ Peace & homely college environment.{'\n'}
            ~ Well equipment computer lab with unlimited internet access.{'\n'}
            ~ Extra curricular activities.{'\n'}
            ~ Located in prime location of Kathmandu Valley.{'\n'}
            ~ Sufficient infrastructure.{'\n'}
         </Text>
      </View>

      </ScrollView>
    )
  }
}
