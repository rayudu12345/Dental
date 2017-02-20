
import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    AppRegistry,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import StyleVars from '../Style/StyleVars';
import { Actions } from 'react-native-router-flux';

export default class TopMenu extends Component{
    render(){
        return(
                <View style = {styles.menu} >
                    <TouchableHighlight onPress={()=>{Actions.sideBar({title:'Himal Dental Hospital'})}} underlayColor={'transparent'}>
                        <Image
                            source={require('../Images/menu.png')} style={styles.menuImage}

                        />
                    </TouchableHighlight>

                    <Text style = {styles.menuText}>
                        Himal Dental Hospital
                    </Text>
                </View>

        )
    }
}

const styles = StyleSheet.create({
    menu : {
        height: 0.1 * windowHeight,
        backgroundColor: StyleVars.Colors.navBarBackground,
        borderBottomColor: "rgba(255,255,255,0.5)",
        borderBottomWidth: 1,
        width: windowWidth,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    menuText : {
        padding: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 0.04 * windowHeight,
        marginTop:  0.015 * windowHeight,
        marginLeft: 0.05 * windowWidth,
    },
    menuImage : {
      width: 0.05 * windowWidth,
      height: 0.025 * windowHeight,
      marginLeft: 15,
      marginTop:  0.035 * windowHeight,
    }
});

AppRegistry.registerComponent('TopMenu', () => TopMenu);
