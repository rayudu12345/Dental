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

export default class Lasers extends Component{
  render(){
    return(
        <ScrollView style = {SharedStyles.container}>
        <Text style={SharedStyles.heading2}>
            Benefits of Laser Dentistry
        </Text>

        <Text style = {SharedStyles.content}>
        → Painless.{'\n'}
        → Less time in dental chair for dental treatment.{'\n'}
        → No whining sound associated with the dental drill.{'\n'}
        → Absolutely Painless Procedure.{'\n'}
        → During Surgery less bleeding.{'\n'}
        → Suture-less surgical producer possible.{'\n'}
        → More comfortable for kids and young adults.{'\n'}
        → Reduce Swelling.{'\n'}
        → Less chance of postoperative infection.{'\n'}
        → During Surgery Minimum damaged surrounding and adjacent tissues.{'\n'}
        → Increase effect of tooth whitening without any side effect.{'\n'}
        → No Consumption of harmful chemicals.{'\n'}
        → Quick removal of tooth decay/dental caries. Long lasting fillings.{'\n'}
        → Faster healing process.{'\n'}
        → Preservation of tooth and surrounding structure.{'\n'}
        → Dental laser's ability to kill bacteria so create a more sterilized environment.
        </Text>

        <Text style={SharedStyles.heading2}>
            Important uses of lasers in Dentistry
        </Text>

        <Text style = {SharedStyles.content}>
          There are several uses of Laser in dentistry for hard tissue and for a soft tissue.
        </Text>



        <Text style={SharedStyles.heading3}>
            Laser uses of dental Hard Tissue Tooth
        </Text>

        <Text style = {SharedStyles.content}>
        → Conservative Decay removal /Cavity Removal{'\n'}
        → Removal of tooth structure or lesions to eliminate disease{'\n'}
        → Dental Implant
        </Text>

        <Text style={SharedStyles.heading3}>
            Laser uses of dental Soft Tissue / Periodontium
        </Text>

        <Text style = {SharedStyles.content}>
        → Laser Depigmentation{'\n'}
        → Smile design/ gum reshaping / Gumline contouring{'\n'}
        → Gum lift / Crown lengthening{'\n'}
        → Periodontal / gum related care{'\n'}
        </Text>

        <Text style={SharedStyles.heading3}>
              Special painless uses of Laser in oral dentistry
        </Text>

        <Text style = {SharedStyles.content}>
        → Laser Teeth Whitening{'\n'}
        → Single sitting Root canal treatment{'\n'}
        → Frenectomy and tongue tie{'\n'}
        → Curing of restorative filling materials{'\n'}
        → Cosmetic enhancements{'\n'}
        → Lip Repositioning{'\n'}
        → Minor gum surgery / Soft tissue surgical procedures{'\n'}
        → Leukoplakia{'\n'}
        → Lichen planus{'\n'}
        → Cold Sore/Ulcer{'\n'}
        → Epulis.{'\n'}
        → Canker sore and herpes lesions – laser can reduce pain / itching of sores.
        </Text>

        </ScrollView>
    )
  }
}
