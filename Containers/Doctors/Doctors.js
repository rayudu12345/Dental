'use strict';

import React , { Component } from 'react';
import {List, ListItem, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

import {
  Navigator,
  View,
  Dimensions,
  Linking,
  Image,
  StyleSheet,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import SharedStyles from '../../Style/SharedStyles';

export default class Doctors extends Component{
  render(){
    return(
      <ScrollView style = {SharedStyles.container}>
               <List>
                  <ListItem onPress={ Actions.abhishek}>
                    <Text> 1. Dr. Abhishek Singh</Text>
                  </ListItem>

                  <ListItem onPress={ Actions.bikash}>
                    <Text> 2. Dr. Bikash Desar</Text>
                  </ListItem>

                  <ListItem onPress={ Actions.gagan}>
                    <Text> 3. Dr. Gagan Khanal</Text>
                  </ListItem>

                  <ListItem onPress={ Actions.sanjay}>
                    <Text> 4. Dr. Sanjay Sah</Text>
                  </ListItem>

                  <ListItem onPress={ Actions.lochana}>
                    <Text> 5. Dr. Lochana Acharya</Text>
                  </ListItem>

                  <ListItem onPress={ Actions.sujaya}>
                    <Text> 6. Dr. Sujaya Gupta</Text>
                  </ListItem>

                  <ListItem onPress={ Actions.kishor}>
                    <Text> 7. Dr. Kishor Bhandari</Text>
                  </ListItem>

                  <ListItem onPress={ Actions.arbinda}>
                    <Text> 8. Dr. Arbinda Sharma</Text>
                  </ListItem>

                  <ListItem onPress={ Actions.sita}>
                    <Text> 9. Dr. Sita Niure</Text>
                  </ListItem>

                  <ListItem onPress={ Actions.dipesh}>
                    <Text>10. Dr. Dipesh Awasti</Text>
                  </ListItem>

                  <ListItem onPress={ Actions.anisha}>
                    <Text>11. Dr. Anisha Dhital</Text>
                  </ListItem>

                  <ListItem onPress={ Actions.deepak}>
                    <Text>12. Dr. Deepak Kumar Sharma</Text>
                  </ListItem>

                  <ListItem onPress={ Actions.nitin}>
                    <Text>13. Dr. Nitin Aryal</Text>
                  </ListItem>

                  <ListItem onPress={ Actions.rikendra}>
                    <Text>14. Dr. Rikendra Shrestha</Text>
                  </ListItem>

                  <ListItem onPress={ Actions.swechchha}>
                    <Text>15. Dr. Swechchha Shah</Text>
                  </ListItem>

                  <ListItem onPress={ Actions.dipeenti}>
                    <Text>16. Dr. Dipeenti Budhathoki</Text>
                  </ListItem>

                  <ListItem onPress={ Actions.sekhar}>
                    <Text>17. Dr. Sekhar Gupta</Text>
                  </ListItem>

                  <ListItem onPress={ Actions.brinjala}>
                    <Text>18. Dr. Brinjala Bista</Text>
                  </ListItem>

                  <ListItem onPress={ Actions.shubisma}>
                    <Text>19. Dr. Shubisma Maharjan</Text>
                  </ListItem>

                  <ListItem onPress={ Actions.niroj}>
                    <Text>20. Dr. Niroj Khanal</Text>
                  </ListItem>

                  <ListItem onPress={ Actions.naresh}>
                    <Text>21. Dr. Naresh Joshi</Text>
                  </ListItem>

                  <ListItem onPress={ Actions.mahmood}>
                    <Text>22. Dr. Mahmood Aahamood Khan</Text>
                  </ListItem>

                  <ListItem onPress={ Actions.santosh}>
                    <Text>23. Dr. Santosh Kumar Pandey</Text>
                  </ListItem>
                 </List>
            </ScrollView>
    )
  }
}
