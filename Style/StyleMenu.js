import { StyleSheet, Dimensions } from'react-native';
import React, {Component} from 'react'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({


    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#ffcc99',

    },
    container1:{
        flex:2,
        flexDirection:'row',
    },
    container2:{
        flex:1,
        flexDirection:'row',
        height:0.2 * windowHeight,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 0.1 * windowWidth,
    },

    container21:{
        flex:1,
        flexDirection:'column',
        marginRight: 0.1 * windowWidth,
        marginBottom: 0,
    },
    container22:{
        flex:1,
        flexDirection:'column',
        marginRight: 0.1 * windowWidth,
        marginBottom: 0,
    },
    container23:{
        flex:1,
        flexDirection:'column',
        marginRight: 0.1 * windowWidth,
        marginBottom: 0,
    },

    container211: {
        flex:1,
        flexDirection:'row',
        borderWidth:2,
        width:0.2 * windowWidth,
        height:0.2 * windowWidth,
        borderColor: '#ffcc99',

    },
    container221: {
        flex:1,
        flexDirection:'row',
        borderWidth:2,
        width:0.2 * windowWidth,
        height:0.2 * windowWidth,
        borderColor: '#ffcc99',
    },

    container212: {
        flex:1,
        flexDirection:'row',
        borderWidth:2,
        width:0.2 * windowWidth,
        height:0.2 * windowWidth,
        borderColor: '#ffcc99',
    },
    container222: {
        flex:1,
        flexDirection:'row',
        borderWidth:2,
        width:0.2 * windowWidth,
        height:0.2 * windowWidth,
        borderColor: '#ffcc99',
    },
    container213: {
        flex:1,
        flexDirection:'row',
        borderWidth:2,
        width:0.225 * windowWidth,
        height:0.2 * windowWidth,
        borderColor: '#ffcc99',
    },
    container223: {
        flex:1,
        flexDirection:'row',
        borderWidth:2,
        width:0.2 * windowWidth,
        height:0.2 * windowWidth,
        borderColor: '#ffcc99',
    },
    containerText: {
        fontSize: 0.02*windowHeight,
        textAlign: 'center',
    }

});
