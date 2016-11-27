
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
import SliderImage from './Slider';


export default class MainSlider extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.header}>
                    <SliderImage />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffcc99',
    },
    header : {
        flex: 1
    },
    body : {
        flex: 1,
    },
    bodyText : {
        fontSize: 30,
        margin: 10
    }
});
