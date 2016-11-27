
import { StyleSheet, Dimensions } from 'react-native';
import StyleVars from '../Style/StyleVars';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
    container: {
        marginTop:0.09 * windowHeight,
        marginTop:0.09 * windowHeight,
        backgroundColor:'#ffffff',
    },
    alignContainer:{
        alignItems:'center',
        justifyContent:'center',

    },
    headingText: {
        color: StyleVars.Colors.primaryText,
        fontFamily: StyleVars.Fonts.heading,
        fontSize: 20,
        fontWeight: "600",
    },
    text: {
        color: StyleVars.Colors.primaryText,
        fontFamily: StyleVars.Fonts.general,
        fontSize: 12,
        fontWeight: "400"
    },
    navBarTitleText: {
        color: StyleVars.Colors.navBarTitle,
        fontFamily: StyleVars.Fonts.heading,
        fontWeight: "600",
        fontSize: 18,
        lineHeight: 22
    },
    menuImage: {
      backgroundColor: 'blue'
    },
    body : {
        height: 0.95 * windowHeight,
    },
    heading1 :{
        fontSize: 0.03 * windowHeight,
        color:'#8B0000',
        textAlign: 'left',
        marginLeft: 25,
        marginRight: 25,
        marginTop: 25,
    },
    heading2 :{
        fontSize: 0.025 * windowHeight,
        color:'#9E0508',
        textAlign: 'left',
        marginLeft: 25,
        marginRight: 25,
        marginTop: 25
    },
    heading3 :{
        fontSize: 0.02 * windowHeight,
        color:'#9E0508',
        textAlign: 'left',
        marginLeft: 25,
        marginRight: 25,
        marginTop: 25
    },
    content : {
        fontSize : 0.02 * windowHeight,
        marginLeft: 25,
        marginTop: 10,
        marginRight: 25,
        color: '#030303',
        textAlignVertical: 'top',
    },
    contentImage : {
        marginLeft: 25,
    },
    doctorInfo : {
        fontSize : 0.020 * windowHeight,
        marginLeft: 25,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 25,
        color: '#030303',
    },
    menuSection: {
      width: windowWidth,
      height: windowHeight,
      backgroundColor: 'rgb(200,200,200)',

  },
  avatarContainer: {
      marginTop: 0.12 * windowHeight,
      borderColor: '#aaaaaa',
  },
  avatar: {
    width: 0.28* windowWidth,
    height: 0.165 * windowHeight,
    borderRadius: 20,
    marginBottom: 30,
    marginTop: 20,
    marginLeft: 20,
    flex: 1,
  },
  name: {
    position: 'absolute',
    color: '#000000',
    top: 30,
    fontSize: 0.065*windowWidth,
    marginLeft: 0.35* windowWidth,
    marginTop: 0.025 * windowHeight,
  },
    image : {
        margin : 20,
    },
    item: {
      fontSize: 16,
      fontWeight: '300',
      paddingTop: 20,
    },
    page: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#777'
    },
    pageContent: {
        flex: 1,
        alignItems: 'center',
    },
    menuContainer: {
      borderWidth: 0.5,
      borderColor: '#aaaaaa',
  },
    menuText: {
      flex: 1,
      width: window.width,
      height: window.height,
      padding: 20,
    },
    itemText: {
      fontSize: 0.04*windowWidth,
      color: '#000000',
      fontWeight: '300',
      marginTop: 20,
      paddingLeft: 20,
      marginBottom: 20,
      marginLeft: 20,

  },
  backgroundImage:{
    width: windowWidth,
    height: windowHeight,
  }
});
