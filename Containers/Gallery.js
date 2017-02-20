import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Dimensions
} from 'react-native';
import Spinner from './Spinner';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export default class Gallery extends Component{
  constructor(props){
    super(props)
    this.state = {
      loaded:false,
      data:[],
      url:'',
      description:'',
    }
  }

  componentWillMount(){
    fetch('http://www.himaldental.com.np/himal/sendImages.php',{method:'GET'})
    .then((response)=>response.json())
    .then((responseData)=>{
      this.setState({
        data:responseData,
        loaded:true,
      })
    })
  }
    render(){

      if(this.state.loaded){
        const image_collection = this.state.data.map((pack,i)=>{
          return(
            <View key={pack.id} style={styles.wrapper1}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{uri:'http://himaldental.com.np/'+pack.url}}
                    style={styles.imageContainer}
                    resizeMode="cover"
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.description}>{pack.description}</Text>
                </View>
            </View>
          );
        })

        return(
            <ScrollView>
                {image_collection}
            </ScrollView>
        );
      }else{
        return(
          <Spinner size="large"/>
        )
      }

    }
}


const styles = StyleSheet.create({

wrapper1:{
  flex:1,
  marginTop:0.09* deviceHeight,
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'center',
  borderWidth:1,
  borderColor:'#42f4e5'
},

imageContainer:{
  height:0.3 * deviceHeight,
  width:deviceWidth,
},
textContainer:{
  height:0.1* deviceHeight,
  fontSize:17,
  alignItems:'center',
  justifyContent:'center',
}
});
