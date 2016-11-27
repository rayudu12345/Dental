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

export default class Crown extends Component{
  render(){
    return(
        <ScrollView style = {SharedStyles.container}>
          <Text style={SharedStyles.heading2}>
              Crown and Bridge Works
          </Text>
          <Text style = {SharedStyles.content}>
            A crown is a dental restoration that covers or 'caps' a tooth to restore it to its normal
            shape, size and function. Its purpose is to strengthen or improve the appearance of a tooth.
            A bridge is a dental restoration that replaces or 'bridges' the space where one or more teeth have been lost. Bridge can be supported in many ways:{'\n'}
            1. Through natural teeth{'\n'}
            2. Through implants{'\n'}
            3. Through a combination of natural teeth and implants
          </Text>
          <Text style={SharedStyles.heading2}>
              Indication
          </Text>

          <Text style = {SharedStyles.content}>
              1. If your tooth has undergone significant decay or a large portion has fractured such that there is not enough tooth structure remaining to provide support{'\n'}{'\n'}
              2. Following root canal treatment, a crown is often needed to strengthen the tooth.{'\n'}{'\n'}
              3. If you have discolored or badly shaped teeth, then for cosmetic reasons and to improve the esthetics of your smile you may opt for crowns.{'\n'}{'\n'}
              4. Severe grinding can cause attrition and wear down the teeth to a point where only crowns can strengthen them.{'\n'}{'\n'}
              5. If you have a dental implant, a crown will be fitted over the implant..{'\n'}{'\n'}
              6. Full mouth rehabilitation may require several crowns
          </Text>
          <Text style={SharedStyles.heading2}>
              Important of Bridges
          </Text>

          <Text style = {SharedStyles.content}>
              1. Missing teeth may create a lasting social, psychological and emotional turbulence. Missing teeth may affect your self-esteem and confidence and may make you feel awkward, anxious and nervous or self conscious while going out in public.{'\n'}{'\n'}
              2. Missing teeth may affect your speech and appearance. It may cause your facial muscles to sag and give you that old worn outlook.{'\n'}{'\n'}
              3. Missing one or more back teeth affects chewing. The biting force on the remaining teeth begins to change to compensate for the lost tooth. Consequently there is extra pressure and discomfort which may accelerate their decay and demise.{'\n'}{'\n'}
              4. Teeth surrounding the missing tooth may start to shift and this leads to difficulty in cleaning and chewing. Over time there is plaque and tartar accumulation which causes gum disease and weaken the support of the remaining teeth.{'\n'}{'\n'}
              5. Missing teeth may lead to collapse of the jaws. This results in gaps and spaces between the remaining teeth and undue prominence of the chin, making chewing difficult and the individual looking older.{'\n'}{'\n'}
          </Text>



          <Text style={SharedStyles.heading2}>
              Types of Crown and bridges
          </Text>

          <Text style = {SharedStyles.content}>
            Dental crowns are made up of different types of materials namely;{'\n'}
            → Metal crown.{'\n'}
            → Porcelain fused to metal crown (PFM).{'\n'}
            → All ceramic crown.{'\n'}
            → Metal free crown.{'\n'}
            → Zirconia crown.{'\n'}
            → CAD/CAM.{'\n'}
            → Laser Sintered{'\n'}
          </Text>

        </ScrollView>
    )
  }
}
