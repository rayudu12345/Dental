
import React , { Component } from 'react';
import {List, ListItem, Text } from 'native-base';
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
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
import { Actions } from 'react-native-router-flux';

import SharedStyles from '../Style/SharedStyles';

export default class FAQ extends Component{
    render(){
        return(
            <ScrollView style = {SharedStyles.container}>
                <List >
                    <ListItem onPress={Actions.braces}>
                        <Text >Braces</Text>
                    </ListItem>

                    <ListItem onPress={Actions.dentalImplants}>
                        <Text>Dental Implants</Text>
                    </ListItem>

                    <ListItem onPress={Actions.lasers}>
                        <Text>Lasers in Dentistry</Text>
                    </ListItem>

                    <ListItem onPress={Actions.childs}>
                        <Text>Child Dental Care</Text>
                    </ListItem>

                    <ListItem onPress={Actions.cosmetics}>
                        <Text>Cosmetic Dentistry</Text>
                    </ListItem>

                    <ListItem  onPress={Actions.roots}>
                        <Text>Root Canal Treatment</Text>
                    </ListItem>

                    <ListItem onPress={Actions.crowns }>
                        <Text>Crowns and Bridges</Text>
                    </ListItem>

                    <ListItem onPress={Actions.fillings }>
                        <Text>Fillings and Restorations</Text>
                    </ListItem>

                    <ListItem onPress={Actions.denture }>
                        <Text>Dentures</Text>
                    </ListItem>

                    <ListItem onPress={Actions.wisdom }>
                        <Text>Wisdom Tooth Removal</Text>
                    </ListItem>

                    <ListItem onPress={Actions.gumSurgeryTreatment }>
                        <Text>Gum Surgery Treatment</Text>
                    </ListItem>

                    <ListItem onPress={ Actions.toothWhitening}>
                        <Text>Tooth Whitening</Text>
                    </ListItem>

                    <ListItem onPress={Actions.oralCancerScreening}>
                        <Text>Oral Cancer Screening</Text>
                    </ListItem>

                    <ListItem onPress={Actions.toothJwellery }>
                        <Text>Tooth Jwellery </Text>
                    </ListItem>
                </List>
            </ScrollView>
        )
    }
}
