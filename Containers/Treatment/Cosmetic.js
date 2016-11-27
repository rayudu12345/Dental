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


export default class Cosmetic extends Component{
  render(){
    return(
        <ScrollView style = {SharedStyles.container}>
          <Text style={SharedStyles.heading2}>
                Cosmetics in Dentistry
          </Text>
          <Text style = {SharedStyles.content}>
            Cosmetic Dentistry is a branch of dentistry that focuses on improving the appearance of teeth, the mouth and the smile along with improving the oral hygiene, general health and functionality of an individuals teeth. This branch includes a variety of procedures that would enhance your smile and ultimately your looks. At Our Clinic, with young amiable staff, cosmetic dentistry will be delivered to you in a manner that provides smile makeover with cosmetic dental options including teeth whitening, porcelain veneers, composite veneers,
            gum depigmentation, crowns and bridges. For more information on cosmetic dentistry, make sure you visit us soon.
          </Text>
          <Text style = {SharedStyles.content}>

          </Text>
          <Text style={SharedStyles.heading2}>
            Porcelain Vaneers/Laminates
          </Text>

          <Text style = {SharedStyles.content}>
          Ceramic/Porcelain veneers are the very thin custom made porcelain facings or thin shell of enamel
          like substitute that are bonded to the front surface of unattractive teeth to improve appearance.{'\n'}{'\n'}
          Ceramic veneers/ porcelain veneers can improve various imperfections like small chips/fracture of teeth,
           gaps, Rotated or malaligned teeth, unshapely or discolored teeth to achieve a magnificent, durable and
           long lasting smile by allowing alteration in tooth position, shape, size and color. The end result –
           a drastic cosmetic makeover.{'\n'}{'\n'}
          Veneers generally don't require the extensive shaping prior to the procedure that
          crowns do, yet offer a stronger, more aesthetic alternative to bonding.They say our
          smile is the perfect accessory we own. That is why we need to take care of it and invest
          in keeping our pearly whites healthy.
          </Text>

          <Text style = {SharedStyles.content}>

          </Text>
          <Text style={SharedStyles.heading2}>
              Composite Veneers
          </Text>

          <Text style = {SharedStyles.content}>
          Composite veneers is a technique used to improve the appearance of your teeth. The term "composite"
          refers to a tooth-colored blend of materials, either plastic or resin, which is bonded to an existing
          tooth surface. Such kind of veneers are done in one appointment.{'\n'}{'\n'}
          Bonding is basically a process where in enamel-like dental composite material is applied to tooth's surface,
          sculpted into desired shape, hardened with a high intensity light and then polished. Bonding is ideal for
          fixing minor chipped or cracked teeth, hiding discoloration on the tooth's surface, or reducing the gaps between
           teeth.{'\n'}{'\n'}
          They are also being used as a cavity filling material due to cosmetic reasons.
           bonding creates more esthetically pleasing teeth and a brighter smile. Unlike veneers or crowns,
           composite bonding requires very little removal of the original tooth.{'\n'}{'\n'}

          Advantage of ceramic veneer over composite bonding/composite veneer:{'\n'}
          1. Durability: Ceramic veneers are more durable. Inspite of being very thin, once bonded to tooth structure    it becomes very strong and is difficult to remove. Porcelain veneers can last for longer span of time.{'\n'}
          2. Aesthetics: Ceramic veneers give a much more natural tooth like appearance due to the translucent    properties of porcelain that mimic the light handling properties of enamel.{'\n'}
          3. Gum tissue tolerance.{'\n'}
          4. Stain resistant.
          </Text>

          <Text style={SharedStyles.heading2}>
              Tooth Contouring and Reshaping
          </Text>

          <Text style = {SharedStyles.content}>
          For individuals who have chipped, cracked or irregularly shaped teeth, dental contouring and reshaping
           can be just the ticket for a more beautiful smile.{'\n'}{'\n'}
          Tooth reshaping, or contouring, is one of few instant treatments now available in cosmetic dentistry.
          Dental reshaping and contouring is a procedure to correct crooked teeth, chipped teeth, cracked teeth
          or even overlapping teeth in just one session.{'\n'}{'\n'}
          Braces under certain circumstances. It is a procedure of. A few millimeters of reduction and a few
          millimeters of tooth-colored laminate can create a beautiful smile when performed by a cosmetic dentist,
           with no discomfort to you. Tooth reshaping, or dental contouring, is commonly used to alter the length,
            shape or position of your teeth.{'\n'}{'\n'}
          The reshaping of your teeth is a procedure that involves the removal of a very small amount of tooth
           structure to help achieve a more desirable smile. Chipped or fractured areas are smoothed out and
           specific angles or edges can be rounded or squared. Contouring creates better alignment and can create
           a more feminine or masculine smile. It is sometimes done to prevent chipped areas from getting worse.
           Tooth reshaping is a safe and conservative way to improve your smile. Since teeth can become weaker if
           large amount of enamel is removed, this procedure is limited to minor changes or combined with veneers
           or bonding for a terrific smile.
          </Text>
        </ScrollView>
    )
  }
}
