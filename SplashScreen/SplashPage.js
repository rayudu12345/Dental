import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Navigator,
    Image,
    Dimensions
} from 'react-native';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { Actions, Scene } from 'react-native-router-flux';
import Menus from '../Containers/Menus';
export default class SplashPage extends Component {

    componentDidMount() {
        setTimeout(() => {
            Actions.menus()
        }, 2000)	;
        };
        render(){
            return (
                <View style={{flex: 1, backgroundColor: '#115cd6', alignItems:'center', justifyContent:'center'}}>

                        <Image source={require('../Images/himal.jpg')}></Image>
                    <View>
                        <Text style = {{fontSize: 0.02*windowHeight}}>Powered by CSRDC Nepal</Text>
                    </View>

                </View>
            );
        }

}
