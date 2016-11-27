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

export default class WhyUs extends Component{
  render(){
    return(
      <ScrollView style = {SharedStyles.container}>
      <View>
        <Text style= {SharedStyles.heading1}>Why Us ?</Text>
        </View>
        <View>
          <Text style= {SharedStyles.heading2}>Curative Services</Text>
          </View>
        <View>
        <Text style = {SharedStyles.content}>
          → 24th Hour Dental services. {'\n'}
          → Treatment done by advance laser technology.{'\n'}
          → OT/Post OT available.{'\n'}
          → Dental Check-up using Intra-Oral Camera.{'\n'}
          → Filling/ Restoration.{'\n'}
          → Minor/Major Oral Surgery-Simple extraction, Surgical Extraction, Impaction, Apicoectomy, Gingivectomy, Flap Surgery, Operculectomy.{'\n'}
          → Facture management.{'\n'}
          → Artificial Tooth Replacement- Denture (Complete/ partial).{'\n'}
          → Crown and Bridge Works/Prosthodontics Treatment.{'\n'}
          → Teeth Position Correction/ Orthodontics Treatment.{'\n'}
          → Root Canal Treatment/ Endodontic Treatment.{'\n'}
          → Pedodontics Treatment.{'\n'}
          → Scaling and Polishing/ Periodontics Treatment.{'\n'}
          → Dental Implant.{'\n'}
          → Oral Ulcer/ Oral Cancer Treatment.{'\n'}
          → 2D Imaging ( OPG; LAT-CEPH; OPG- CEPH; 2 D TMJ; WRIST X-RAY;  PNS VIEW; SKULL VIEW ){'\n'}
          → 3D Imaging ( FULL CBCT; MANDIBLE; MAXILLA; SEGMENTAL CBCT; 3 D TMJ (R); 3 D TMJ (L);  3 D  TMJ (BOTH)){'\n'}
          → Ambulance service also available.

         </Text>
      </View>
      <View>
        <Text style= {SharedStyles.heading2}>Preventive Services</Text>
        </View>
        <View>
          <Text style= {SharedStyles.heading3}>Oral Health Promotional Activities</Text>
          </View>
        <View>
        <Text style = {SharedStyles.content}>
            → Oral Health Survey and Research {'\n'}
            → Oral Health Awareness and Exhibition {'\n'}
            → Oral Health Training {'\n'}
            → 3 years Academic Course (Certificate in Dental Science (CDS) CTEVT affiliated  {'\n'}
            → 3 month Short term Course (Dental Chair-Side Assistant (DCA) CTEVT Affiliated {'\n'}
            → 3 month Short term Course ( Dental Lab Technician  (DLT) CTEVT affiliated  {'\n'}
         </Text>
      </View>
      <View>
        <Text style= {SharedStyles.heading3}>Oral Health Instructions</Text>
        </View>
      <View>
      <Text style = {SharedStyles.content}>
          → Brushing Techniques {'\n'}
          → Healthy Diet and Oral Health {'\n'}
          → Substance abuse and Oral Health {'\n'}
       </Text>
    </View>
      </ScrollView>
    )
  }
}
