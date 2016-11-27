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

export default class GumTreatment extends Component{
  render(){
    return(
        <ScrollView style = {SharedStyles.container}>
          <Text style={SharedStyles.heading2}>
              Gum Surgery / Periodontal Treatment
          </Text>
          <Text style = {SharedStyles.content}>
              In cases of advanced gum disease, where non-surgical therapy doesn't work for improvement of your gums health, surgical therapy is considered. Different procedures included in surgical therapy are:
          </Text>
          <Text style={SharedStyles.heading3}>
              Flap surgery/pocket reduction surgery
          </Text>

          <Text style = {SharedStyles.content}>
                During this procedure the gums are lifted back and the tarter is removed.
          </Text>
          <Text style={SharedStyles.heading3}>
              Bone grafts
          </Text>

          <Text style = {SharedStyles.content}>
                Involves using fragments of your own bone, synthetic bone, or donated bone to replace bone destroyed by gum disease.
          </Text>
          <Text style={SharedStyles.heading3}>
              Soft tissue grafts
          </Text>

          <Text style = {SharedStyles.content}>
                This procedure reinforces thin gums or fills in places where gums have receded.
          </Text>
          <Text style={SharedStyles.heading3}>
              Guided tissue regeneration
          </Text>

          <Text style = {SharedStyles.content}>
                Done in combination with flap surgery, a small piece of mesh-like fabric is inserted between the bone and gum tissue.
          </Text>
          <Text style={SharedStyles.heading3}>
              Bone surgery
          </Text>

          <Text style = {SharedStyles.content}>
              Smoothes shallow craters in the bone due to moderate and advanced bone loss.
          </Text>
          <Text style={SharedStyles.heading2}>
              What is splinting of teeth?
          </Text>

          <Text style = {SharedStyles.content}>
          In some cases, loose teeth are good candidates for a procedure known as "splinting".
          When teeth are splinted, they are joined together to increase their strength.
          For example, the teeth on the bottom jaw in the front of the mouth are common targets for gum disease.
          If two or three of those teeth become loose, they can be joined to surrounding teeth that are more stable.
          One common technique is placing a wire across the loosened tooth and bonding with dental composite material.
          Once the teeth are splinted, they are much more stable, and eating can become comfortable again.
          </Text>

        </ScrollView>
    )
  }
}
