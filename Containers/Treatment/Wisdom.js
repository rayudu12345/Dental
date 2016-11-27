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

export default class Wisdom extends Component{
  render(){
    return(
        <ScrollView style = {SharedStyles.container}>
          <Text style={SharedStyles.heading2}>
              Wisdom Tooth Removal
          </Text>
          <Text style = {SharedStyles.content}>
          Wisdom teeth may not need to be removed if they are:{'\n'}{'\n'}
            →Healthy{'\n'}
            →Grown in completely (fully erupted){'\n'}
            →Positioned correctly and biting properly with their opposite teeth{'\n'}
            →Able to be cleaned as part of daily hygiene practices{'\n'}{'\n'}
          Many times, however, wisdom teeth — the third molars in the very back of your mouth
           — don't have room to grow properly and can cause problems.
           Erupting wisdom teeth can grow at various angles in the jaw,
            sometimes even horizontally.{'\n'}{'\n'}

            Sometimes wisdom teeth only partially emerge through the gums. Other times, they remain completely hidden.
            Wisdom teeth that aren't able to emerge normally become impacted, or trapped, within your jaw.
            If the wisdom teeth emerge partially through the gums, a passageway is created, which can cause problems.
             And because this area is hard to see and clean, it can become a magnet for bacteria that cause gum disease
             and oral infection. Some dentists recommend removing wisdom teeth if they don't fully emerge or
             if they grow near the nerve of the lower jaw. Many dentists believe it's better to remove wisdom
              teeth before the roots are fully formed, when someone is younger and more likely to recover faster
               from surgery. This is why some young adults have their wisdom teeth pulled before the teeth cause
                problems and become more firmly rooted in the jaw.{'\n'}{'\n'}

        According to the American Dental Association, wisdom teeth removal may be necessary
         if you experience changes in the area of those teeth, such as:{'\n'}{'\n'}

        → Pain{'\n'}
        → Repeated infection of soft tissue behind the lower last tooth{'\n'}
        → Cysts (fluid-filled sacs){'\n'}
        → Tumors{'\n'}
        → Damage to nearby teeth{'\n'}
        → Gum disease{'\n'}
        → Extensive tooth decay{'\n'}{'\n'}

        The decision to remove wisdom teeth isn't always clear.
         Talk to your dentist or an oral surgeon about the position and health of your
          wisdom teeth and what's best for your situation.
          </Text>
        </ScrollView>
    )
  }
}
