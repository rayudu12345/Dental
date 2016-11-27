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

export default class DentalImplants extends Component{
  render(){
    return(
        <ScrollView style = {SharedStyles.container}>
          <Text style={SharedStyles.heading2}>
                Dental Implants
          </Text>
          <Text style = {SharedStyles.content}>
            Dental implants are todays best replacement alternative to missing teeth in terms of form,
            function and aesthetics. Implants are now used as routine treatment for an entire range of
            problems from replacing a single tooth to full oral rehabilitation and even for reliable
            denture retention Dental implant is an artificial tooth root (made of titanium) that is
            placed into your jawbone to replace a missing tooth, multiple teeth or an edentulous (without
              teeth) arch. Dental implants are actually more tooth-saving than traditional bridgework,
               since implants do not rely on neighbouring teeth for support. The success rate of this
               type of treatment today is very high and predictable. An implant can support a variety
               of restorations such as a single crown, multi-unit bridge and full arch dentures.
               </Text>

               <Text style={SharedStyles.heading2}>
                What are the benefits of dental implant treatment?
               </Text>

               <Text style = {SharedStyles.content}>
                First of all A big, healthy, happy smile. And you will have a lot to smile about, too.
                Dental implants allow you to speak, eat, sing, in other words, do everything you
                want – with total self assurance.
                </Text>

                <Text style={SharedStyles.heading2}>
                Do implant procedures cause much pain?
                </Text>

                <Text style = {SharedStyles.content}>
                In most cases these procedures produce very little, if any, discomfort.
                In fact, many patients do not have to use any pain Killer. Your decision to
                use implants will help you to avoid much pain and discomfort in the long term.
                Besides, given the overall health care benefits, you should not deny yourself
                proper treatment out of fear of pain. As with any medical or dental procedure,
                 your attending doctor, the dentist, is equipped to provide you with appropriate treatment,
                 including any pain medicines you need.
          </Text>
        </ScrollView>
    )
  }
}
