'use strict';

import React , { Component } from 'react';

import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Alert,

} from 'react-native';

import SharedStyles from '../../Style/SharedStyles';
import { Actions } from 'react-native-router-flux';
import Spinner from '../Spinner';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export default class Doctor extends Component{


constructor(props){
  super()
  this.state = {
    data_reg:[],
    loaded:false,
  }
}
  componentWillMount(){
    fetch('http://www.himaldental.com.np/himal/doctors.php?doctors=doctor',{method:'GET'})
    .then((response)=>response.json())
    .then((responseData)=>{
      this.setState({
            data_reg:responseData,
            loaded:true,
      })
    })

  }


  _onHandlePress(pack){
    requestAnimationFrame(()=>{
      Actions.doctorsProfile({title:pack.name,id:pack.id})
    })
  }
  render(){
    if(this.state.loaded){
      const pack = this.state.data_reg[0].data.map((pack,i)=>{
        return(
          <View key={pack.id} style={styles.wrapper1}>
                <TouchableHighlight onPress={this._onHandlePress.bind(this,pack)} underlayColor={'transparent'}
                  activeOpacity={.5}
              >
              <View style={styles.doctorContainer}>
                <Text style={styles.doctorText}>{pack.name}</Text>
              </View>
              </TouchableHighlight>
          </View>
        );
      })
      return(
        <ScrollView>
        <View style={styles.wrapper}>
          {pack}
        </View>
        </ScrollView>
      )
    }else{
      return(
        <Spinner size="large"/>
      )
    }

  }
}

const styles = StyleSheet.create({
  wrapper:{
    marginTop:0.1 * deviceHeight,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  wrapper1:{
    alignItems:'center',
    justifyContent:'center',

  },
  doctorContainer:{
    height:0.08 * deviceHeight,
    width:0.9 * deviceWidth,
    padding:0.05 * deviceWidth,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'#94989e',
    marginVertical:2,
  },
  
  doctorText:{
    fontSize:17,
    fontFamily:'san-serief-medium',
    color:'#f48642',
  }
});
