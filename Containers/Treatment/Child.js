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
export default class Child extends Component{
  render(){
    return(
        <ScrollView style = {SharedStyles.container}>
              <Text style={SharedStyles.heading2}>
                    Child Dental Care
              </Text>
              <Text style = {SharedStyles.content}>
                "TEETHING" Around 6 months of age, your baby's first shiny white tooth will usually appear, typically in the front
                center of the lower jaw. This eruption of primary teeth / baby teeth is called teething.
                Minor discomfort is associated with teething, and some of the symptoms you will see include irritability,
                sore or inflamed gums, excessive drooling of saliva, loss of appetite, a change in eating habits or difficulty
                in sleeping. These should not cause alarm and are to be expected. However, if your baby experiences other problems
                during the teething process such as rash, fever or vomiting, something else may be wrong. Consult with your
                pediatrician in those cases, and do not make the assumption it is due to teething. The best thing to do to
                aid discomfort is to clean your baby's mouth with a damp gauze pad two or three times daily, and giving your
                baby a teething ring to chew on.
              </Text>
              <Text style={SharedStyles.heading2}>
                  What parents can do to prevent baby tooth decay ?
              </Text>

              <Text style = {SharedStyles.content}>
              You can prevent this from happening to your child's teeth by learning how to protect them.{'\n'}
              → Clean your child's teeth daily{'\n'}
              → Never allow your child to fall asleep with a bottle filled with juice, milk, or infant formula (or when awake, sip   on it for long periods of time as a pacifier).{'\n'}
              → Start bottle weaning by at least a year.{'\n'}
              → Give your child plain water for thirst.{'\n'}
              → Make sure your child gets the fluoride needed to prevent decay.{'\n'}
              → Have regular dental visits for your child beginning when their first tooth erupts.{'\n'}
              </Text>
              <Text style={SharedStyles.heading2}>
                  Pit and Fissure sealants to prevent cavity
              </Text>

              <Text style = {SharedStyles.content}>
              Sealants are a safe and painless way of protecting your children's teeth from decay.
              A sealant is a protective plastic resin coating (similar to a tooth colored filling),
               which is applied to the biting surfaces of the back teeth. The sealant forms a hard
               shield that keeps food and bacteria from getting into the tiny grooves in the teeth
               and causing decay.

              {'\n'}<Text style={SharedStyles.heading3}>Indications</Text>{'\n'}
              Sealants are only applied to the back teeth – the molars and premolars. These are the teeth that have pits and fissures on their biting surfaces. Your dentist will tell you which teeth should be sealed after he/she has examined them, and checked whether the fissures are deep enough for sealing to help. Some teeth naturally form with deep grooves which will need to be sealed, others with shallow ones which will not need sealing.

              {'\n'}<Text style={SharedStyles.heading3}>Prosiger</Text>{'\n'}
              The process is usually quick and straightforward taking only a few minutes per tooth. The tooth is thoroughly cleaned, prepared with a special solution, and dried. The liquid sealant is then applied and allowed to set hard – usually by shining an ultraviolet light onto it.

              {'\n'}<Text style={SharedStyles.heading3}>Durability</Text>{'\n'}
              Sealants usually last for many years, but your dentist will want to check them regularly to make sure that the seal is still intact. They can wear over time, and sometimes the dentist needs to add or replace some sealant to be sure that no decay can start underneath them.

              {'\n'}<Text style={SharedStyles.heading3}>Mechanism</Text>{'\n'}
              The sealant forms a smooth, protective barrier, by covering all the little grooves and dips in the surface of the tooth. Dental decay easily starts in these grooves.

              {'\n'}<Text style={SharedStyles.heading3}>Proper Age</Text>{'\n'}
              Sealants are often applied as soon as the permanent teeth start to come through. This is usually between 6 and 7 years of age for the first molar teeth. The rest are usually sealed as soon as they appear which can be any time between 11 and 14 years of age (premolars).
              </Text>



              <Text style={SharedStyles.heading2}>
                Flouride Treatment
              </Text>

              <Text style = {SharedStyles.content}>
              <Text style={SharedStyles.heading3}>Topical Fluoride</Text>{'\n'}
              Topical fluoride is a preventive agent applied to tooth enamel. It comes in a number of different forms. A dental professional places gels or foams in trays that are held against the teeth for up to four minutes. Fluoride varnish is brushed or "painted" on the enamel.{'\n'}{'\n'}

              → Varnish is especially useful for young patients and those with special needs who may not tolerate fluoride trays. Children who benefit the most from fluoride are those at highest risk for decay. "Indicated" for Patients having a history of previous cavities, a diet high in sugar or carbohydrates, orthodontic appliances, and certain medical conditions such as dry mouth.

              {'\n'}<Text style={SharedStyles.heading3}>Need For Fluoride Supplements</Text>{'\n'}
              Fluoride inhibits loss of minerals from tooth enamel and encourages remineralization (strengthening areas that are weakened and beginning to develop cavities). Fluoride also affects bacteria that cause cavities, discouraging Acid Attacks that break down the tooth. Risk for decay is reduced even more when fluoride is combined with a healthy diet and good oral hygiene.

              {'\n'}<Text style={SharedStyles.heading3}>Appropriate Age For Fluoride Supplements</Text>{'\n'}
              The dentist considers many factors before recommending a fluoride supplement. Your child's age, risk of developing dental decay and dietary sources of fluoride are important considerations. Infant formulas contain different amounts of fluoride. Bottled, filtered and well waters also vary in the amount of fluoride they contain. Your dentist can help determine if your child is receiving and not exceeding the recommended amount.

              {'\n'}<Text style={SharedStyles.heading3}>Mode of Action</Text>{'\n'}
              In general, kids under the age of 6 months do not need fluoride supplements. Fluoridation is done to prevent cavity formation in milk teeth. Proper oral hygiene maintenance from the start will prevent cavities in permanent teeth provided you follow your dentist's instructions. Fluoride treatment is recommended for a child above 3 years of age.
              </Text>
        </ScrollView>
    )
  }
}
