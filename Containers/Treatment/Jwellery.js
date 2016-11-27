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

export default class Jwellery extends Component{
  render(){
    return(
        <ScrollView style = {SharedStyles.container}>
          <Text style={SharedStyles.heading2}>
              What is Tooth Jewellery?
          </Text>
          <Text style = {SharedStyles.content}>
          Tooth Jewellery is the latest fashion craze to hit the UK. Tooth jewellery classic designs are an elegant compliment
          to standard jewellery.
          When placed on the tooth, the jewellery creates a distinctive expression of one's individuality.
            sometimes even horizontally.{'\n'}{'\n'}
            There are 2 main types of tooth jewellery available:{'\n'}{'\n'}
           • Twinkles: This is a collection of 24-carat gold and white gold jewellery. The jewellery is available in
             over 50 different designs with some including diamonds, sapphires and rubies.{'\n'}{'\n'}
           • Dental Gems: Are a range of glass crystals are available in nine different colours – diamond, rainbow,
            ruby, sapphire, emerald, emerald green, aquamarine, pink, sapphire light.
          </Text>

          <Text style={SharedStyles.heading3}>
          Is The Jewellery For Males Or Females?
          </Text>
          <Text style = {SharedStyles.content}>
          Both – there are many different designs which appeal to everyone. Children under the age of 16 should have parental consent.
          </Text>

          <Text style={SharedStyles.heading3}>
          How Do You Apply them?
          </Text>
          <Text style = {SharedStyles.content}>
          The dentist will use a dental adhesive to apply the Jewellery to your tooth.
          </Text>

          <Text style={SharedStyles.heading3}>
          Does The Application Procedure Hurt?
          </Text>
          <Text style = {SharedStyles.content}>
          NO! – The procedure is similar to placing an orthodontic bracket on a tooth. There is no drilling involved and the procedure is completely painless.
          </Text>

          <Text style={SharedStyles.heading3}>
          How Long Does The Application Procedure Take?
          </Text>
          <Text style = {SharedStyles.content}>
          The fitting procedure should take no more than 10 to 15 minutes.
          </Text>

          <Text style={SharedStyles.heading3}>
          How Long Will The Jewellery Stay On My Tooth?
          </Text>
          <Text style = {SharedStyles.content}>
          The tooth Jewellery can last on your tooth indefinitely or for as long as you want it.
          </Text>

          <Text style={SharedStyles.heading3}>
          Will The Tooth Jewellery Harm My Tooth?
          </Text>
          <Text style = {SharedStyles.content}>
          When properly placed by a dentist, the tooth Jewellery will not damage or harm your tooth in any way. Tooth jewellery should only be applied to natural teeth.
          </Text>

          <Text style={SharedStyles.heading3}>
          How Do I Remove The Tooth Jewellery When I No Longer Want it?
          </Text>
          <Text style = {SharedStyles.content}>
          If you would like to remove your tooth Jewellery the it can be taken off by a dentist at any time.
          </Text>

          <Text style={SharedStyles.heading3}>
          How Much Does It Cost?
          </Text>
          <Text style = {SharedStyles.content}>
          Prices vary from design to design, ask your dentist for more information.
          </Text>
        </ScrollView>

    )
  }
}
