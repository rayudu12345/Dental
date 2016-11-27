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

// here we are: define your domain model
const Person = t.struct({
  name: t.String,              // a required string
  age: t.Number,               // a required number
  gender: t.String,             // a required gender
  address: t.String,            // a required address
  treatment: t.String,            // a reuired treatment
  date: t.String,               // a required date
  time: t.String              // a required time
});

const options = {}; // optional rendering options (see documentation)
import { Actions } from 'react-native-router-flux';
import SharedStyles from '../../Style/SharedStyles';
export default class Appointment extends Component{

  onButtonPress() {
    // call getValue() to get the values of the form
    const value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
    }
  }

  render() {
    return (
        <ScrollView style={SharedStyles.container}>
          <View>
            <Text style = {styles.content}>Please fill the following form for appointment! </Text>
          </View>
          <Form
              ref="form"
              type={Person}
              options={options}
          />
          <TouchableHighlight style={styles.button} onPress={Actions.menus} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Take Appointment</Text>
          </TouchableHighlight>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
    marginLeft: 25,
  },
  title: {
    fontSize: 0.028 * Dimensions.get("window").height,
    alignSelf: 'center',
    marginBottom: 30,

  },
  content : {
    fontSize: 0.028 * Dimensions.get("window").height,
    marginLeft: 25,
    marginTop: 15,
    marginBottom: 15,

  },
  buttonText: {
    fontSize: 0.022 * Dimensions.get("window").height,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 0.07 * Dimensions.get("window").height,
    backgroundColor: '#4CAF50',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    margin: 25,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
