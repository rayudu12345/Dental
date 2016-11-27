import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
    Navigator
} from 'react-native';
import {Router, Scene, Schema, Route} from 'react-native-router-flux';
import Treatment from './Containers/Treatment/Treatment';
import DoctorProfile from './Containers/Doctors/Doctors';
import Appointment from './Containers/Appointment/Appointment';
import Gallery from './Containers/Gallery';
import FAQ from './Containers/FAQ';
import AboutUs from './Containers/About';
import Menus from './Containers/Menus';
import SideBar from './Containers/SideBar';
import SplashScreen from './SplashScreen/SplashPage';
import Branches from './Containers/Branches';

//Imports for Treatments
import Braces from './Containers/Treatment/Braces';
import Child from './Containers/Treatment/Child';
import Cosmetic from './Containers/Treatment/Cosmetic';
import Crown from './Containers/Treatment/Crown';
import DentalImplants from './Containers/Treatment/DentalImplants';
import Filling from './Containers/Treatment/Filling';
import Lasers from './Containers/Treatment/Lasers';
import Root from './Containers/Treatment/Root';
import Wisdom from './Containers/Treatment/Wisdom';
import Whitening from './Containers/Treatment/Whitening';
import OralCancer from './Containers/Treatment/OralCancer';
import Denture from './Containers/Treatment/Denture';
import GumTreatment from './Containers/Treatment/GumTreatment';
import Jwellery from './Containers/Treatment/Jwellery';

//Imports for doctors

import Abishek from './Containers/Doctors/Abhishek';
import Anisha from './Containers/Doctors/Anisha';
import Arbinda from './Containers/Doctors/Arbinda';
import Bikash from './Containers/Doctors/Bikash';
import Brinjala from './Containers/Doctors/Brinjala';
import Deepak from './Containers/Doctors/Deepak';
import Dipeenti from './Containers/Doctors/Dipeenti';
import Dipesh from './Containers/Doctors/Dipesh';
import Gagan from './Containers/Doctors/Gagan';
import Kishor from './Containers/Doctors/Kishor';
import Lochana from './Containers/Doctors/Lochana';
import Mahmood from './Containers/Doctors/Mahmood';
import Naresh from './Containers/Doctors/Naresh';
import Niroj from './Containers/Doctors/Niroj';
import Nitin from './Containers/Doctors/Nitin';
import Rikendra from './Containers/Doctors/Rikendra';
import Sanjay from './Containers/Doctors/Sanjay';
import Santosh from './Containers/Doctors/Santosh';
import Sekhar from './Containers/Doctors/Sekhar';
import Shubisma from './Containers/Doctors/Shubisma';
import Sita from './Containers/Doctors/Sita';
import Sujaya from './Containers/Doctors/Sujaya';
import Swechchha from './Containers/Doctors/Swechchha';

//SIde bar structures

import Message from './Containers/SideBar/Message';
import ContactUs from './Containers/SideBar/ContactUs';
import WhyUs from './Containers/SideBar/WhyUs';
import DentalCollege from './Containers/SideBar/DentalCollege';

console.disableYellowBox = true;
export default class App extends Component {
    render(){
        return(
                <Router>
                    <Scene key="treatment" component={Treatment} title="Treatments" hideNavBar={false}/>
                    <Scene key="braces" component={Braces} title="Braces" hideNavBar={false}/>
                    <Scene key="childs" component={Child} title="Child Dental Care" hideNavBar={false}/>
                    <Scene key="cosmetics" component={Cosmetic} title="Cosmetic Dentistry" hideNavBar={false}/>
                    <Scene key="crowns" component={Crown} title="Crowns and Bridges" hideNavBar={false}/>
                    <Scene key="dentalImplants" component={DentalImplants} title="Dental Implants" hideNavBar={false}/>
                    <Scene key="fillings" component={Filling} title="Fillings and Restorations" hideNavBar={false}/>
                    <Scene key="lasers" component={Lasers} title="Lasers In Dentistry" hideNavBar={false}/>
                    <Scene key="roots" component={Root} title="Root Canal Treatment" hideNavBar={false}/>
                    <Scene key="wisdom" component={Wisdom} title="Wisdom Tooth Removal" hideNavBar={false}/>
                    <Scene key="toothWhitening" component={Whitening} title="Tooth Whitening" hideNavBar={false}/>
                    <Scene key="oralCancerScreening" component={OralCancer} title="Oral Cancer Screening" hideNavBar={false}/>
                    <Scene key="denture" component={Denture} title="Dentures" hideNavBar={false}/>
                    <Scene key="gumSurgeryTreatment" component={GumTreatment} title="Gum Surgery Treatment" hideNavBar={false}/>
                    <Scene key="toothJwellery" component={Jwellery} title="Tooth Jwellery" hideNavBar={false}/>




                    <Scene key="doctorProfiles" component={DoctorProfile} title="Doctor Profiles" hideNavBar={false}/>
                    <Scene key="abhishek" component={Abishek} title="Dr. Abhishek Singh" hideNavBar={false}/>
                    <Scene key="anisha" component={Anisha} title="Dr. Anisha Dhital" hideNavBar={false}/>
                    <Scene key="arbinda" component={Arbinda} title="Dr. Arbinda Sharma" hideNavBar={false}/>
                    <Scene key="bikash" component={Bikash} title="Dr. Bikash Desar" hideNavBar={false}/>
                    <Scene key="brinjala" component={Brinjala} title="Dr. Brinjala Bista" hideNavBar={false}/>
                    <Scene key="deepak" component={Deepak} title="Dr. Deepak Kumar Sharma" hideNavBar={false}/>
                    <Scene key="dipeenti" component={Dipeenti} title="Dr. Dipeenti Budhathoki" hideNavBar={false}/>
                    <Scene key="dipesh" component={Dipesh} title="Dr. Dipesh Awasti" hideNavBar={false}/>
                    <Scene key="gagan" component={Gagan} title="Dr. Gagan Khanal" hideNavBar={false}/>
                    <Scene key="kishor" component={Kishor} title="Dr. Kishor Bhandari" hideNavBar={false}/>
                    <Scene key="lochana" component={Lochana} title="Dr. Lochana Acharya" hideNavBar={false}/>
                    <Scene key="mahmood" component={Mahmood} title="Dr. Mahmood Aahamood Khan" hideNavBar={false}/>
                    <Scene key="naresh" component={Naresh} title="Dr. Naresh Joshi" hideNavBar={false}/>
                    <Scene key="niroj" component={Niroj} title="Dr. Niroj Khanal" hideNavBar={false}/>
                    <Scene key="nitin" component={Nitin} title="Dr. Nitin Aryal" hideNavBar={false}/>
                    <Scene key="rikendra" component={Rikendra} title="Dr. Rikendra Shrestha" hideNavBar={false}/>
                    <Scene key="sanjay" component={Sanjay} title="Dr. Sanjay Sah" hideNavBar={false}/>
                    <Scene key="santosh" component={Santosh} title="Dr. Santosh Kumar Pandey" hideNavBar={false}/>
                    <Scene key="sekhar" component={Sekhar} title="Dr. Sekhar Gupta" hideNavBar={false}/>
                    <Scene key="shubisma" component={Shubisma} title="Dr. Shubisma Maharjan" hideNavBar={false}/>
                    <Scene key="sita" component={Sita} title="Dr. Sita Niure" hideNavBar={false}/>
                    <Scene key="sujaya" component={Sujaya} title="Dr. Sujaya Gupta" hideNavBar={false}/>
                    <Scene key="swechchha" component={Swechchha} title="Dr. Swechchha Shah" hideNavBar={false}/>




                    <Scene key="appointments" component={Appointment} title="Appointments" hideNavBar={false}/>
                    <Scene key="branches" component={Branches} title="Branches" hideNavBar={false}/>
                    <Scene key="gallery" component={Gallery} title="Gallery" hideNavBar={false}/>
                    <Scene key="FAQ" component={FAQ} title="FAQ" hideNavBar={false}/>
                    <Scene key="aboutUs" component={AboutUs} title="About Us" hideNavBar={false}/>
                    <Scene key ="menus" component={Menus} initial={true} hideNavBar={true} title="Himal Dental Hospital"/>
                    <Scene key="sideBar" component={SideBar} initial={false} hideNavBar={false} />
                    <Scene key="splashScreen" component={SplashScreen} initial={true} hideNavBar={true} />



                    <Scene key="message" component={Message} title="Message from Director" hideNavBar={false}/>
                    <Scene key="contactUs" component={ContactUs} title="Contact Us" hideNavBar={false}/>
                    <Scene key="whyUs" component={WhyUs} title="Why Us ?" hideNavBar={false}/>
                    <Scene key="dentalCollege" component={DentalCollege} title="Institute of Dental Sciences" hideNavBar={false}/>


                </Router>
        );
    }
}
AppRegistry.registerComponent('Himal', () => App);
