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
import Appointment from './Containers/Appointment/Appointment';
import Gallery from './Containers/Gallery';
import FAQ from './Containers/FAQ';
import AboutUs from './Containers/About';
import Menus from './Containers/Menus';
import SideBar from './Containers/SideBar';
import Branches from './Containers/Branches';
import Doctor from './Containers/Doctors/Doctors';
import DoctorProfile from './Containers/Doctors/DoctorProfile';
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

import Dhumbarahi from './Containers/Branches/Dhumbarahi';
import Chabhil from './Containers/Branches/Chabhil';
import Lagankhel from './Containers/Branches/Lagankhel';
import Itahari from './Containers/Branches/Itahari';
import Hetauda from './Containers/Branches/Hetauda';
import Narayanghat from './Containers/Branches/Narayanghat';
import Dadeldhura from './Containers/Branches/Dadeldhura';
import Dhangadi from './Containers/Branches/Dhangadi';
import Mahendranagar from './Containers/Branches/Mahendranagar';
import Nepalgunj from './Containers/Branches/Nepalgunj';
//SIde bar structures
import Mapes from './maps';
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


                    <Scene key='doctors' component={Doctor} title="Doctors" hideNavBar={false} />
                    <Scene key='doctorsProfile' component={DoctorProfile} hideNavBar={false}/>
                    <Scene key="Dhumbarahi" component={Dhumbarahi} hideNavBar={false}/>
                    <Scene key="Chabhil" component={Chabhil} hideNavBar={false}/>
                    <Scene key="Lagankhel" component={Lagankhel} hideNavBar={false}/>
                    <Scene key="Dadeldhura" component={Dadeldhura} hideNavBar={false}/>
                    <Scene key="Narayanghat" component={Narayanghat} hideNavBar={false}/>
                    <Scene key="Dhangadi" component={Dhangadi} hideNavBar={false}/>
                    <Scene key="Hetauda" component={Hetauda} hideNavBar={false}/>
                    <Scene key="Itahari" component={Itahari} hideNavBar={false}/>
                    <Scene key="Mahendranagar" component={Mahendranagar} hideNavBar={false}/>
                    <Scene key="Nepalgunj" component={Nepalgunj} hideNavBar={false}/>
                    <Scene key="appointments" component={Appointment} title="Appointments" hideNavBar={false}/>
                    <Scene key="branches" component={Branches} title="Branches" hideNavBar={false}/>
                    <Scene key="gallery" component={Gallery} title="Gallery" hideNavBar={false}/>
                    <Scene key="FAQ" component={FAQ} title="FAQ" hideNavBar={false}/>
                    <Scene key="aboutUs" component={AboutUs} title="About Us" hideNavBar={false}/>
                    <Scene key ="menus" component={Menus} initial={true} hideNavBar={true} title="Himal Dental Hospital"/>
                    <Scene key="sideBar" component={SideBar} initial={false} hideNavBar={false} />



                    <Scene key="message" component={Message} title="Message from Director" hideNavBar={false}/>
                    <Scene key="contactUs" component={ContactUs} title="Contact Us" hideNavBar={false}/>
                    <Scene key="whyUs" component={WhyUs} title="Why Us ?" hideNavBar={false}/>
                    <Scene key="dentalCollege" component={DentalCollege} title="Institute of Dental Sciences" hideNavBar={false}/>


                </Router>
        );
    }
}
AppRegistry.registerComponent('Himal', () => App);
