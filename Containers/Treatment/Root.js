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

export default class Root extends Component{
  render(){
    return(
        <ScrollView style = {SharedStyles.container}>
          <Text style={SharedStyles.heading2}>
              Root Canal Treatment
          </Text>
          <Text style = {SharedStyles.content}>
                Root canal is the treatment in which the infected pulp is removed from the tooth and the
                space occupied by it is cleaned and filled with a special filling material called guttapercha.
                Even though the pulp has been removed from the inside of the tooth, the tooth is still embedded
                 in a living jaw structure. The root canal tooth will not feel hot or cold. However the tooth would still retain normal
                sensation to touch or pressure.
          </Text>
          <Text style={SharedStyles.heading2}>
          Procedure
          </Text>

          <Text style = {SharedStyles.content}>
          STEP 1{'\n'}
          After the tooth is anesthetized, an opening is made through the crown into the pulp chamber.{'\n'}{'\n'}
          STEP 2{'\n'}
          The length of the root canals is determined.{'\n'}{'\n'}
          STEP 3{'\n'}
          Unhealthy pulp is removed. Canals are cleaned, enlarged and shaped.{'\n'}{'\n'}
          STEP 4{'\n'}
          Canals are filled and sealed. A metal or fibre post may be added for structural support or to retain restorative materials.{'\n'}{'\n'}
          STEP 5{'\n'}
          The tooth is sealed with a permanent filling followed by a crown adding further protection and strength to the tooth Depending on the amount of tooth structure remaining and dentist's decision, the tooth may or may not need a post, referred as a screw by some.{'\n'}
          </Text>
          <Text style={SharedStyles.heading2}>
          Diagnosis
          </Text>

          <Text style = {SharedStyles.content}>
          The greatest diagnostic advice in this case is a digital RVG X-ray. X-ray demonstrates the presence or absence of pus accumulation in the form of a Periapical Radioluency.
          </Text>



          <Text style={SharedStyles.heading2}>
          Single-Sitting Root Canal Procedure.
          </Text>

          <Text style = {SharedStyles.content}>
          → First a local anesthesia is administered to the tooth and the tooth become numb so that the procedure is    more pleasant & comfortable.{'\n'}
          → Next step doctor uses a drill to gain access to the area inside the tooth where the nerve is. A    hole is made inside the tooth, to open the pulp chamber to allow access to the canals.{'\n'}
          → Next, he cleans the pulp chamber and all root canals using with help of special endohandpiece    instruments with use rotary files the infected nerves are removed.{'\n'}
          → The root canals are flushed with antibacterial solution. Root canals are further cleaned scrapes and    scrubs, cleaning it of debris and bacteria & reshaped to free them of all debris with the endorotary file    instrument.{'\n'}
          → Once the root canals are dry & clean, he is filled and sealed with a biocompatible material like as Gutta    Purcha Points.{'\n'}
          → The tooth cavity is then filled with a permanent tooth color light cure composite filling material.{'\n'}
          → A root canal treated tooth should be ideally crowned after some days.
          </Text>
          <Text style={SharedStyles.heading2}>
          Advantage of Single visit root canal treatment
          </Text>

          <Text style = {SharedStyles.content}>
          → Takes only half an hour to finish procedure thus saves time.{'\n'}
          → A single visit procedure.{'\n'}
          → The patient does not feel discomfort by local anesthesia again and again every visit.{'\n'}
          → Favorable in patient who do not show up after first sitting in traditional old root canal treatment.{'\n'}
          → This reduces the re infection chances by number of visits.
          </Text>

          <Text style={SharedStyles.heading2}>
          Indication of Single visit root canal treatment
          </Text>

          <Text style = {SharedStyles.content}>
          → Tooth nerve tissue has started to degenerate in case of attrition, abrasion.{'\n'}
          → Teeth causing pain.{'\n'}
          → Tooth nerve exposure in case of fracture or trauma to the tooth.{'\n'}
          → Patients with acute tooth abscess.
          </Text>

          <Text style={SharedStyles.heading2}>
          Post and Core
          </Text>

          <Text style = {SharedStyles.content}>
          A post and core is a dental restoration used to sufficiently build-up tooth structure for future restoration with a crown when there is not enough tooth structure to properly retain the crown, due to loss of tooth structure to either decay or fracture.
          The post, commonly known as 'screw' is cemented in the root canal after a Root Canal Treatment (RCT) is done, in order to strengthen the tooth.
          The core, such as dental composite, can be packed around the cemented post and the restored tooth is now ready for crown preparation.
          </Text>
        </ScrollView>
    )
  }
}
