import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableHighlight,
    Image,
    Dimensions
} from 'react-native';
import styles from '../Style/StyleMenu';
import { Actions } from 'react-native-router-flux';
import TopMenu from './TopMenu';
import MainSlider from 'Himal/Slider/MainSlider';
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
export default class Menus extends Component {
    render(){
        return(
                <View style ={styles.container}>

                    <TopMenu />
                    <View style={styles.container1}>
                        <MainSlider />
                    </View>

                    <View style={styles.container2}>
                        <View style={styles.container21}>
                                <TouchableHighlight style={styles.container211} onPress={Actions.treatment}>
                                        <View>
                                            <Image
                                                source={require('../Images/treatment.png')}
                                                style={{
                                                    resizeMode:'stretch',
                                                    height:0.2 * deviceWidth,
                                                    width: 0.2 * deviceWidth}}
                                            ></Image>
                                            <Text style ={styles.containerText}>Treatments</Text>
                                        </View>
                                </TouchableHighlight>

                                <TouchableHighlight style={styles.container221} onPress={Actions.gallery}>
                                    <View>
                                        <Image
                                            source={require('../Images/gallery.jpg')}
                                            style={{
                                                resizeMode:'stretch',
                                                height:0.2 * deviceWidth,
                                                width: 0.2 * deviceWidth}}
                                        ></Image>
                                        <Text style ={styles.containerText}>Gallery</Text>
                                    </View>
                                </TouchableHighlight>
                        </View>

                        <View style={styles.container22}>

                                <TouchableHighlight style={styles.container212} onPress={Actions.doctorProfiles}>
                                    <View>
                                        <Image
                                            source={require('../Images/doctor.png')}
                                            style={{
                                                resizeMode:'stretch',
                                                height:0.2 * deviceWidth,
                                                width: 0.2 * deviceWidth}}
                                        ></Image>
                                        <Text style ={styles.containerText}>Dr. Profile</Text>
                                    </View>
                                </TouchableHighlight>

                                <TouchableHighlight onPress={Actions.branches} style={styles.container222}>
                                    <View>
                                        <Image
                                            source={require('../Images/branches.png')}
                                            style={{
                                                resizeMode:'stretch',
                                                height:0.2 * deviceWidth,
                                                width: 0.2 * deviceWidth}}
                                        ></Image>
                                        <Text style ={styles.containerText}>Branches</Text>
                                    </View>
                                </TouchableHighlight>

                        </View>

                        <View style={styles.container23}>
                                <TouchableHighlight onPress={Actions.appointments} style={styles.container213}>
                                    <View>
                                        <Image
                                            source={require('../Images/appointment.png')}
                                            style={{
                                                resizeMode:'stretch',
                                                height:0.2 * deviceWidth,
                                                width: 0.2 * deviceWidth}}
                                        ></Image>
                                        <Text style ={styles.containerText}>Appointment</Text>
                                    </View>
                                </TouchableHighlight>


                                <TouchableHighlight onPress={Actions.aboutUs} style={styles.container223}>
                                    <View>
                                        <Image
                                            source={require('../Images/about.png')}
                                            style={{
                                                resizeMode:'stretch',
                                                height:0.2 * deviceWidth,
                                                width: 0.2 * deviceWidth}}
                                        ></Image>
                                        <Text style ={styles.containerText}>About Us</Text>
                                    </View>
                                </TouchableHighlight>
                        </View>
                    </View>
                </View>
        );
    }

}
