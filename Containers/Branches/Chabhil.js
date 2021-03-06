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
import SharedStyles from '../../Style/SharedStyles';
export default class Chabhil extends Component{

  constructor(props){
    super(props)
    this.state = {
      coordinate: {
      latitude: 27.717407,
      longitude: 85.346304,
    },
    }
  }
  render(){
    const { region } = this.props;
    return(
      <View style={styles.main}>
      <View style={styles.container}>
          <MapView
          style={styles.map}
          initialRegion={{
          latitude: 27.717407,
          longitude: 85.346304,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}
          >
        <MapView.Marker coordinate={this.state.coordinate} />
      </MapView>
  </View>
  <View style={styles.bottomContainer}>
    <Text style = {styles.content}>
    Himal Dental Hospital{'\n'}
    Chabhil, Kathmandu {'\n'}
    Phone Number: 01-4492800, 01-4465742
     </Text>
    </View>
  </View>
    )
  }
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    marginTop:0.09 * deviceHeight,
    alignItems:'center',
    justifyContent:'center',
  },
  container: {
    flex:6,
    ...StyleSheet.absoluteFillObject,
    height: 0.7 * deviceHeight,
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bottomContainer:{
    flex:3,
    alignItems:'flex-end',
    justifyContent:'flex-end'

  },
  content : {
      fontSize : 17,
      textAlign:'center',
      color: '#030303',

  },

})
