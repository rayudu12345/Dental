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

export default class Whitening extends Component{
  render(){
    return(
        <ScrollView style = {SharedStyles.container}>
          <Text style={SharedStyles.heading2}>
                Tooth Whitening
          </Text>
          <Text style = {SharedStyles.content}>
          We at our clinic provide chair side as well as home bleaching options for the patients interested in
           getting a whiter shade for their teeth. Bleaching the teeth in the clinic takes about 40mins whereas
            the home bleach is used by the patient by the patient on a custom made tray made to fit the teeth to
             be used at night. Duration of the tray to be kept in the mouth is based on the strength of the bleach
              used. Bleaching, however, does not keep the teeth permanently white. Those who want to have a more
              lasting whitening result have the option of getting veneers placed for better results.{'\n'}
              If you feel conscious when you smile because of discoloured teeth, we have the solution to lighten
               and brighten your smile. You can use tooth-whitening treatments that would lighten your discoloured
                teeth and the results are almost immediate.{'\n'}
                There are two ways to tooth whitening. You can get customised bleaching
                 trays made by your dentist and then use bleaching gels in the comfort of your home
                 till you are satisfied with the lighter tooth colour. This is the home bleach procedure.
                  We also do office bleaching that requires you to visit us for your whitening sessions.
                  These may be one or two sessions,according to the level of whiteness you desire.
          </Text>
          <Text style={SharedStyles.heading2}>
              Do many people whiten their teeth?
          </Text>

          <Text style = {SharedStyles.content}>
          More people than you might imagine. A bright sparkling smile can make a big difference for everyone.
          </Text>

          <Text style={SharedStyles.heading2}>
                    How long do the results last?
          </Text>

          <Text style = {SharedStyles.content}>
          By following some simple post-whitening care instructions, your teeth will always be lighter than they were before. To keep your teeth looking their best, we recommend flossing, brushing twice daily, regular dental cleanings and occasional touch-ups with Zoom! Take-Home gel. These are professional formula products designed specifically to keep your teeth their brightest. They are available only through your dental professional.
          </Text>
      </ScrollView>
    )
  }
}
