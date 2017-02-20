import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
    Navigator,
    Dimensions
} from 'react-native';
var {height,width} = Dimensions.get('window');
import MapView from 'react-native-maps';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export default class Mapes extends Component{
  constructor(props){
    super(props)
    this.state = {
      coordinate: {
      latitude: 27.719163,
      longitude: 85.346251,
    },
    }
  }
  render(){
    const { region } = this.props;
    return(
      <View style={styles.container}>
      <MapView
      style={styles.map}
      initialRegion={{
      latitude: 27.719163,
      longitude: 85.346251,
      latitudeDelta: 0.0222,
      longitudeDelta: 0.0121,
    }}
      >
    <MapView.Marker coordinate={this.state.coordinate} />
  </MapView>
  </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 0.5 * deviceHeight,
    width: deviceWidth,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})
