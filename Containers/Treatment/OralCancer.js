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

export default class OralCancer extends Component{
  render(){
    return(
        <ScrollView style = {SharedStyles.container}>
          <Text style={SharedStyles.heading2}>
              What is oral cancer screening?
          </Text>
          <Text style = {SharedStyles.content}>
          Screening is looking for cancer before a person has any symptoms. This can help find cancer at an early stage. When abnormal tissue or cancer is found early, it may be easier to treat. By the time symptoms appear, cancer may have begun to spread.

          Scientists are trying to better understand which people are more likely to get certain types of cancer. They also study the things we do and the things around us to see if they cause cancer. This information helps doctors recommend who should be screened for cancer, which screening tests should be used, and how often the tests should be done.

          It is important to remember that your doctor does not necessarily think you have cancer if he or she suggests a screening test. Screening tests are given when you have no cancer symptoms.

          If a screening test result is abnormal, you may need to have more tests done to find out if you have cancer. These are called diagnostic tests.

          Screening for oral cancer may be done during a routine check-up by a dentist or medical doctor. The exam will include looking for lesions, including areas of leukoplakia (an abnormal white patch of cells) and erythroplakia (an abnormal red patch of cells). Leukoplakia and erythroplakia lesions on the mucous membranes may become cancerous.
          </Text>
      </ScrollView>
    )
  }
}
