import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    AppRegistry,
    Text,
    View,
    Image,
    TouchableHighlight,
    ScrollView
} from 'react-native';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import StyleVars from '../Style/StyleVars';
import { Actions } from 'react-native-router-flux';
import SharedStyles from '../Style/SharedStyles';
export default class SideBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (

            <ScrollView  style={SharedStyles.menuSection}>

                <View style={SharedStyles.avatarContainer}>
                    <TouchableHighlight onPress={Actions.menus}>
                        <Image
                            style={SharedStyles.avatar}
                            source={require('../Images/himal.jpg')}
                        />
                    </TouchableHighlight>
                    <Text style={SharedStyles.name} onPress={Actions.menus}>Himal Dental Hospital</Text>
                </View>
                <TouchableHighlight style={SharedStyles.menuContainer} onPress={Actions.message}>
                    <Text
                        style={SharedStyles.itemText}>
                        Message from Director
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={SharedStyles.menuContainer} onPress={Actions.dentalCollege}>
                    <Text

                        style={SharedStyles.itemText}>
                        Himal Institute of Dental Sciences
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={SharedStyles.menuContainer} onPress={Actions.whyUs}>
                    <Text

                        style={SharedStyles.itemText}>
                        Why Us ?
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight style={SharedStyles.menuContainer} onPress={Actions.FAQ}>
                    <Text

                        style={SharedStyles.itemText}>
                        FAQ
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight style={SharedStyles.menuContainer} onPress={Actions.menus}>
                    <Text

                        style={SharedStyles.itemText}>
                        Location
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={SharedStyles.menuContainer} onPress={Actions.contactUs}>
                    <Text

                        style={SharedStyles.itemText}>
                        Contact Us
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={SharedStyles.menuContainer} onPress={Actions.menus}>
                    <Text
                        style={SharedStyles.itemText}>
                        Share
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={SharedStyles.menuContainer}>
                    <Text
                        style={SharedStyles.itemText}>

                    </Text>
                </TouchableHighlight>
            </ScrollView>
        );
    }
}
