'use strict';

import React , { Component } from 'react';

import {
  Navigator,
  AppRegistry,
  View,
  Dimensions,
  Text,
  Linking,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import SharedStyles from '../../Style/SharedStyles';

export default class Braces extends Component{
  render(){
    return(
        <ScrollView style = {SharedStyles.container}>
          <Text style={SharedStyles.heading2}>
               Braces
          </Text>
          <Text style = {SharedStyles.content}>
          Braces, or "tooth clips" as they are more commonly called in Nepal,
          is a routine treatment for a condition known in dentistry as "malocclusion,"
          which means your teeth are not perfectly set. This could be either because they are crowded
           or crooked or because your jaw is not in perfect alignment. If your lower and upper jaws do
           not meet properly when you close your mouth, it's called a "bad bite." Such tooth and jaw
           alignment problems could occur due to injuries, thumb-sucking in childhood or simply malformation
          at birth. {'\n'}{'\n'}
          </Text>
          <Image
              source={require('../../Images/BracesBA.jpg')}
              style = {SharedStyles.contentImage}
          />
          <Text style = {SharedStyles.content}>
          Dental braces are usually recommended for children while they're growing up.
          Flaws in jaw structure, protruding teeth, cross bites, and other problems become apparent in children
           from the age of 6 onwards. If a child is given braces from the age of 8 to 14,
           he/she gets optimal results.
           This does not mean that adults can't get braces. It's just that cosmetic or structural dental defects can
           easily be corrected in growing children. These days "orthodontics," the branch of dentistry that deals
           with tooth and jaw reshaping, is sufficiently advanced to treat teeth displacement and jaw irregularities
            at any age, given moderate bone health.
          </Text>
        </ScrollView>
    )
  }
}
