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

export default class Denture extends Component{
  render(){
    return(
        <ScrollView style = {SharedStyles.container}>
          <Text style={SharedStyles.heading2}>
              Dentures / Artificial Tooth Replacement
          </Text>
          <Text style = {SharedStyles.content}>
              We provide following types of dentures services at Himal Dental Hospital.
          </Text>
          <Text style={SharedStyles.heading2}>
              Conventional Dentures
          </Text>

          <Text style = {SharedStyles.content}>
                Complete dentures are used when all the teeth in upper and lower jaws are missing.
                 These dentures remain in place by firm fitting to the gum ridges. These dentures are
                 made after the teeth have been removed and the gum tissue has begun to heal, a conventional
                  denture is ready for placement in the mouth about 2 to 4 weeks after the teeth have been removed.
          </Text>
          <Text style={SharedStyles.heading2}>
              Dental Implant Supported Overdentures and Fixed Overdentures
          </Text>

          <Text style = {SharedStyles.content}>
                  Implant dentures or Implant supported overdentures is a denture that uses precision
                  dental attachments to hold the denture down. The overdenture attachment can be placed
                  in tooth roots that have been saved, or placed into dental implants which have been placed to receive them.
          </Text>



          <Text style={SharedStyles.heading2}>
              Immediate Dentures
          </Text>

          <Text style = {SharedStyles.content}>
              Immediate dentures are constructed before teeth are removed so that you will not be without any teeth.
              Constructing immediate dentures involves taking impressions (making copies) of your mouth before the teeth
              are removed. When your remaining teeth are removed the denture can be inserted immediately. Bones and gums
              shrink over time, especially during the healing period and compared with conventional dentures, these dentures
               require more adjustments to fit properly during the healing process and generally should only be
                considered a temporary solution until conventional dentures can be made.
          </Text>
          <Text style = {SharedStyles.heading2}>
              Partial Dentures
          </Text>
          <Text style = {SharedStyles.content}>
              Partial Denture is a removable dental appliance that replaces multiple missing teeth.
              Unlike a bridge, which is fixed in the mouth, these dentures can be removed for cleaning
               and left out while the patient sleeps. These dentures attaches to your natural teeth with
                metal or acrylic clasps or it can be attached to the teeth with crowns with precision attachments.
                These clasps are hook-like structures that help hold it in place.
          </Text>
          <Text style = {SharedStyles.heading2}>
                Flexible Denture
          </Text>
          <Text style = {SharedStyles.content}>
                This is a new flexible denture base material, which reduces the chair time and eliminates the cumbersome materials associated with rigid partials. Thus making a better and stronger appliance. This flexible material design is perfect, as it has to adapt on a flexible environment in contrast with rigid
                metal-based R.P.D. where rigid material has to adapt on a flexible environment.
          </Text>

        </ScrollView>
    )
  }
}
