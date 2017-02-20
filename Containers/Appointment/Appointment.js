'use strict';

import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    AppRegistry,
    View,
    Navigator,
    BackAndroid,
    ScrollView,
    TouchableHighlight
} from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;
var Gender  = t.enums({
  M:'Male',
  F:'Female',
})
// here we are: define your domain model
const Person = t.struct({
  name: t.String,              // a required string
  age: t.Number,               // a required number
  gender: Gender,             // a required gender
  address: t.String,            // a required address
  treatment: t.String,            // a reuired treatment
  date: (t.Date),               // a required date
  mobile: t.Number              // a required time
});

const options = {
  auto: null,
    date: {
      order: ['D', 'M', 'YY']
    }
}; // optional rendering options (see documentation)
import { Actions } from 'react-native-router-flux';
import SharedStyles from '../../Style/SharedStyles';
export default class Appointment extends Component{

  constructor(props){
    super(props)
    this.state= {
      value: null,
    }
  }
  onChange(value){
    this.setState({
      value:value,
    })
  }

  clearForm(){
    this.setState({
      value:null,
    })
  }

  onPress() {
    var value = this.refs.form.getValue();
      if (value) {
        fetch('http://www.himaldental.com.np/himal/sendmail.php?name='+value.name+'&age='+value.age+'&gender='+value.gender+'&address='+value.address+'&treatment='+value.treatment+'&date='+value.date+'&mobile='+value.mobile)
        .then((response)=>response.json())
        .then((responseData)=>{
          console.log(responseData);
        })
        this.clearForm();
      }
  }



  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style = {styles.content}>Please fill the following form for appointment! </Text>
          </View>
          <Form
              ref="form"
              type={Person}
              options={options}
              value={this.state.value}
              onChange={this.onChange.bind(this)}
          />
          <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Take Appointment</Text>
          </TouchableHighlight>
        </ScrollView>
        </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
