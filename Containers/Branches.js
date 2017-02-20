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

import SharedStyles from '../Style/SharedStyles';
import {Actions} from 'react-native-router-flux';

export default class Branches extends Component{
  render(){
    return(
      <ScrollView style={SharedStyles.container}>
      <View>
        <Text style= {SharedStyles.heading1}>Branches</Text>
        </View>
        <View>
        <Text style = {SharedStyles.content}>
          Himal dental hospital and institute of dental sciences is providing quality dental services not only within the Kathmandu valley, but extends
          its services to the people of the different parts of the country through its branches.
          Its branches are located in Itahari, Hetauda, Narayanghat, Nepalgunj, Dhandgadi, Mahendranagar,Baitadi and Dadeldhura.
         </Text>
      </View>
      <View>
        <Text style= {SharedStyles.heading2}>Main Branch</Text>
        </View>
        <TouchableHighlight onPress={()=>Actions.Dhumbarahi({title:'Dhumbarahi'})} underlayColor={'transparent'}>
          <View style={styles.contentContainer}>
          <Text style = {SharedStyles.content}>
          Himal Dental Hospital and Institute of Dental Sciences{'\n'}
           Dhumbarahi, Kathmandu {'\n'}
           </Text>
        </View>
      </TouchableHighlight>

      <View>
        <Text style= {SharedStyles.heading2}>Other Branches</Text>
      </View>

      <TouchableHighlight onPress={()=>Actions.Chabhil({title:'Chabhil'})} underlayColor={'transparent'}>
        <View style={styles.contentContainer}>
        <Text style = {SharedStyles.content}>
        Himal Dental Hospital{'\n'}
        Chabhil, Kathmandu {'\n'}
         </Text>
      </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={()=>Actions.Lagankhel({title:'Lagankhel'})} underlayColor={'transparent'}>
          <View style={styles.contentContainer}>
        <Text style = {SharedStyles.content}>
        Himal Dental Hospital {'\n'}
        Lagankhel, Lalitpur {'\n'}
         </Text>
      </View>
  </TouchableHighlight>


  <TouchableHighlight onPress={()=>Actions.Itahari({title:'Ithari'})} underlayColor={'transparent'}>
  <View style={styles.contentContainer}>
    <Text style = {SharedStyles.content}>
    Himal Dental Hospital {'\n'}
    Itahari, Sunsari {'\n'}
     </Text>
  </View>
</TouchableHighlight>


<TouchableHighlight onPress={()=>Actions.Hetauda({title:'Hetauda'})} underlayColor={'transparent'}>
<View style={styles.contentContainer}>
  <Text style = {SharedStyles.content}>
  Himal Dental Hospital {'\n'}
  Hetauda, Makwanpur {'\n'}
   </Text>
</View>
</TouchableHighlight>


<TouchableHighlight onPress={()=>Actions.Narayanghat({title:'Narayanghat'})} underlayColor={'transparent'}>
<View style={styles.contentContainer}>
  <Text style = {SharedStyles.content}>
  Himal Dental Hospital {'\n'}
  Narayanghat, Chitwan {'\n'}
   </Text>
</View>
</TouchableHighlight>



<TouchableHighlight onPress={()=>Actions.Nepalgunj({title:'Nepalgunj'})} underlayColor={'transparent'}>
<View style={styles.contentContainer}>
  <Text style = {SharedStyles.content}>
  Himal Dental Hospital {'\n'}
  Nepalgunj, Banke {'\n'}

   </Text>
</View>
</TouchableHighlight>


<TouchableHighlight onPress={()=>Actions.Dhangadi({title:'Dhangadi'})} underlayColor={'transparent'}>
<View style={styles.contentContainer}>
  <Text style = {SharedStyles.content}>
  Himal Dental Hospital {'\n'}
  Dhangadi, Kailali {'\n'}
   </Text>
</View>
</TouchableHighlight>


<TouchableHighlight onPress={()=>Actions.Mahendranagar({title:'Mahendranagar'})} underlayColor={'transparent'}>
<View style={styles.contentContainer}>
    <Text style = {SharedStyles.content}>
    Himal Dental Hospital {'\n'}
    Mahendranagar, Kanchanpur {'\n'}
     </Text>
  </View>
</TouchableHighlight>

<TouchableHighlight onPress={()=>Actions.Dadeldhura({title:'Dadeldhura'})} underlayColor={'transparent'}>
<View style={styles.contentContainer}>
      <Text style = {SharedStyles.content}>
      Himal Dental Hospital {'\n'}
      Dadeldhura {'\n'}
       </Text>
    </View>
</TouchableHighlight>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  contentContainer:{
    borderWidth:3,
    borderColor:'#f47442',
    margin:10,
  }
})
