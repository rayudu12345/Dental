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
    TouchableHighlight,

} from 'react-native';

import SharedStyles from '../../Style/SharedStyles';

export default class Message extends Component {
    render() {
        return (
            <ScrollView style={SharedStyles.container}

            >

                    <Image
                        source={require('../../Images/Rajendra.jpg')}
                        style={{borderRadius: 20, marginTop: 0.02 * Dimensions.get('window').height,
                                marginLeft:  ( 0.5 * Dimensions.get('window').width -120)
                                    } }

                    >
                    </Image>

                <View>
                    <Text style={SharedStyles.heading1}>Message From Director</Text>
                </View>
                <View>
                    <Text style={SharedStyles.content}>
                        Himal Dental Hospital was established in 2003 A.D. with the aim like its name Himal.
                        Himalaya is range, of height and it covers eastern to for wastern region of so Himal
                        dental hospital wants to give the quality dental treatment at optimum height.
                        Throughout the country to each and every people of nepal from Mechi to Mahakali.{'\n'} {'\n'}

                        We have our hospital outlet besides kathumandu periphery. our motto is to give maximum
                        exposure to the students for Certificate in Dental Science so they can independently
                        handle the case in their level and to provide the quality dental services next to your
                        door step. So we are running Himal Dental Hospital & Institute of Dental science 3
                        years academic course and we have planning to run BDS Course soon to raise the quality manpower
                        in this field. We are going to strengthening the hospital branch in 75 districts of the
                        country to serve the patient .{'\n'} {'\n'}
                        We are conducting many free dental camps in school, in communities and we are providing
                        basic dental orientation class for other medical Auxilliaries like ANM,CMA, HA, Staff
                        Nurse and others, who can help the patient related to oral and entofacial problem in
                        their communities. We are making people aware in this dental field by mean of redio
                        program, Posters, Tranning some compaign with popular celebraties to improve the good
                        habits, proper brushing, regular dental checkup, proper food habits and others.
                        We feel the lack of trained, smart and qualified dental manpower in this field. So we
                        ourself run this 3 years Dental Academyc Course. We are making all of them very
                        professional, bold and they will compete with international level, We just want to
                        satisfy our patient doing best treatment, doing the best service using advenced and
                        sutting edge technology with lots of respect, seriousness and base of our Nepali tradition.
                            {'\n'} {'\n'}
                        We want to make Nepal Happy Dental Home conneting the people of Hima with people of
                        Terai by this professional dentistry not only that, we want to make the homely
                        environment inside dentistry. We are trying to uplift the dentistry in world class
                        level so we are always committed to raise the healthy and happy smile.

                    </Text>
                </View>
            </ScrollView>
        );
    }
}
