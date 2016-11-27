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

export default class ContactUs extends Component{
    render(){
        return(
            <ScrollView style={SharedStyles.container}>
                <View>
                    <Text style= {SharedStyles.heading1}>Contact Us</Text>
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
                <View>
                    <Text style = {SharedStyles.content}>
                        Himal Dental Hospital and Institute of Dental Sciences{'\n'}
                        Dhumbarahi, Kathmandu {'\n'}
                        Phone Number: 01-4492692
                    </Text>
                </View>
                <View>
                    <Text style= {SharedStyles.heading2}>Other Branches</Text>
                </View>
                <View>
                    <Text style = {SharedStyles.content}>
                        Himal Dental Hospital{'\n'}
                        Chabhil, Kathmandu {'\n'}
                        Phone Number: 01-4492800, 01-4465742
                    </Text>
                </View>
                <View>
                    <Text style = {SharedStyles.content}>
                        Himal Dental Hospital {'\n'}
                        Lagankhel, Lalitpur {'\n'}
                        Phone Number: 016-201551
                    </Text>
                </View>
                <View>
                    <Text style = {SharedStyles.content}>
                        Himal Dental Hospital {'\n'}
                        Itahari, Sunsari {'\n'}
                        Phone Number: 025-580929
                    </Text>
                </View>
                <View>
                    <Text style = {SharedStyles.content}>
                        Himal Dental Hospital {'\n'}
                        Hetauda, Makwanpur {'\n'}
                        Phone Number: 057-520584
                    </Text>
                </View>
                <View>
                    <Text style = {SharedStyles.content}>
                        Himal Dental Hospital {'\n'}
                        Narayanghat, Chitwan {'\n'}
                        Phone Number: 056-521919
                    </Text>
                </View>
                <View>
                    <Text style = {SharedStyles.content}>
                        Himal Dental Hospital {'\n'}
                        Nepalgunj, Banke {'\n'}
                        Phone Number: 081-521843
                    </Text>
                </View>
                <View>
                    <Text style = {SharedStyles.content}>
                        Himal Dental Hospital {'\n'}
                        Dhangadi, Kailali {'\n'}
                        Phone Number: 091-526103  099-520800
                    </Text>
                </View>
                <View>
                    <Text style = {SharedStyles.content}>
                        Himal Dental Hospital {'\n'}
                        Mahendranagar, Kanchanpur {'\n'}
                        Phone Number: 099-520800
                    </Text>
                </View>
                <View>
                    <Text style = {SharedStyles.content}>
                        Himal Dental Hospital {'\n'}
                        Dadeldhura {'\n'}
                        Phone Number: 096-410247
                    </Text>
                </View>
                <View>
                    <Text style = {SharedStyles.content}>
                        Himal Dental Hospital {'\n'}
                        Baitadi {'\n'}
                        Phone Number: 095-690366
                    </Text>
                </View>
            </ScrollView>
        )
    }
}
