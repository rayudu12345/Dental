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
export default class Filling extends Component{
  render(){
    return(
        <ScrollView style = {SharedStyles.container}>
        <Text style={SharedStyles.heading2}>
          What is a dental restoration?
        </Text>
          <Text style = {SharedStyles.content}>
            → A dental restoration is also called a filling. It is the repair of a damaged or decayed tooth, restoring it back    to its normal shape, appearance and function.{'\n'}{'\n'}
            → The name of the material that is used to repair a tooth is often the name given to the repair process.{'\n'}{'\n'}
              "Amalgam Restoration" is an example of the material giving its name to the process.
          </Text>
          <Text style={SharedStyles.heading2}>
              Why should a damaged or decayed tooth be restored?
          </Text>

          <Text style = {SharedStyles.content}>
            → A tooth is repaired to protect the part of the tooth that has become exposed by the decay or injury.{'\n'}{'\n'}
            → It can prevent the loss of a tooth, since decay may spread and destroy the tooth.{'\n'}{'\n'}
            → Restoration permits normal eating and chewing.{'\n'}{'\n'}
            → Restored teeth should reinstate, or improve upon, the appearance of teeth and the face.
          </Text>
          <Text style={SharedStyles.heading2}>
              What are the available dental restorations?
          </Text>
          <Text style = {SharedStyles.content}>
               There are different types of dental restorations which are used in particular situations.
          </Text>
          <Text style={SharedStyles.heading2}>
              Amalgam restoration
          </Text>

          <Text style = {SharedStyles.content}>
              → An amalgam is an alloy or combination of two or more metals.{'\n'}{'\n'}
              → Amalgam fillings (silver fillings) are made up of mercury, powdered silver and tin. They are mixed and packed into cavities in teeth. It hardens slowly, and replaces the missing tooth substance.{'\n'}{'\n'}
              → Amalgam fillings are held in place by the shape of the prepared cavity.{'\n'}{'\n'}
              → The cavity has to have an undercut to prevent the filling from falling out. The amalgam is then slotted into the cavity.{'\n'}{'\n'}
              → It is still commonly used, despite an ongoing debate about mercury toxicity.{'\n'}
          </Text>

          <Text style={SharedStyles.heading2}>
              Bonding Or Composite Restoration
              "The superglue of dentistry"
          </Text>

          <Text style = {SharedStyles.content}>
              → Composite resin is a plastic tooth-coloured material that is used as a filling. It is also called a white or    plastic filling. The process of fusing the filling material to the tooth is called bonding.{'\n'}{'\n'}
              → It is placed into the cavity in layers until the tooth is restored to its original form.{'\n'}{'\n'}
              → An ultraviolet light is used to harden it, and it can be chewed on immediately after it has been completed.    This is an advantage it has over amalgam.{'\n'}{'\n'}
              → The filling bonds or sticks to the tooth.{'\n'}{'\n'}
              → This characteristic is a major advance for dentistry. There is no longer the need to cut a slot into a tooth    to hold a filling in place, as is necessary for an amalgam filling. As a result, less tooth needs to be cut away for a filling.{'\n'}{'\n'}
              → We at Simplyteeth have named it "the superglue of dentistry".{'\n'}{'\n'}
              → It is hard wearing and is used for repairing front and back teeth.{'\n'}{'\n'}
              → Bonding is ideal for front teeth that need cosmetic dentistry.
          </Text>
        </ScrollView>
    )
  }
}
