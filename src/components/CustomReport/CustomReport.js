import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReportingNav from '../Nav/ReportingNav/ReportingNav';
import CustomAge from './CustomReportComponents/AgeCustomReport';
import CustomContactType from './CustomReportComponents/ContactTypeComponent';
import CustomDisability from './CustomReportComponents/DisabilityCustomReport';
import CustomGender from './CustomReportComponents/GenderCustomReport'
import ImmigrantCountryCustom from './CustomReportComponents/ImmigrantCountryCustom';
import IndividualsServiced from './CustomReportComponents/IndServicedCustom';
import CrisisCounseling from './CustomReportComponents/I-PCrisisCounselingCustom';
import AdvocacyCivilCustom from './CustomReportComponents/I-PAdvocacyCivilCustom';
import AdvocacyCriminalCustom from './CustomReportComponents/I-PAdvocacyCriminalCustom';
import AdvocacyMedicalCustom from './CustomReportComponents/I-PMedicalAdvocacy';
import AdvocacyOtherCustom from './CustomReportComponents/I-POtherAdvocacy';
import PhoneServicesCustom from './CustomReportComponents/PhoneServicesCustom';
import PoliceReportCustom from './CustomReportComponents/PoliceReportCustom';
import RaceEthnicityCustom from './CustomReportComponents/RaceEthnicityCustom';
import SexualOrientationCustom from './CustomReportComponents/SexualOrientationCustom';
import SpecialClassificationCustom from './CustomReportComponents/SpecialClassificationCustom';
import SupportOnCallCustom from './CustomReportComponents/SupportedOnCallCustom';
import TransgenderedCustom from './CustomReportComponents/TransgenderedCustom';
import TransortationCustom from './CustomReportComponents/TransportationCustom';
import VictimTypeCustom from './CustomReportComponents/VitcimTypeCustom';
import UnmetNeedsCustom from './CustomReportComponents/UnmetNeedsCustom';   
import TypesOfVictimizationCustom from './CustomReportComponents/TypesOfVictimizationCustom';
import ZipCodeCustom from './CustomReportComponents/ZipCustom';
import '../../styles/main.css'

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class customReportSelectionPage extends Component{
    state = {
        //tbd if needed
    }

    // componentDidMount() {
    //     //load custom report options on page load
    // }

    submitCustomReport = (event) => {
        console.log('clicked submit Submit Custom Report');
        event.preventDefault();
        // TODO: this.props.dispatch({ sage and reducer to be added})
    }

    render(){
        const customReportTopic = [
            'Age', 'Contact Type', 'Disabilities', 
            'Gender Identity', 'Immigrant Country', 
            'Individuals Serviced', 'In-Person Crisis Counseling', 
            'In-Person Legal Advocacy(Civil)', 'In-Person Legal Advocacy(Criminal)', 
            'In-Person Medical Advocacy', 'Other In-Person Advocacy', 
            'Phone Services Provided', 'Police Report Filed', 'Race/Ethnicity', 
            'Referrals', 'Sexual Orientation', 
            'Special Classification of Victims', 'Supported on Call', 
            'Transgender', 'Transportation', 'Victim Types(Primary / Secondary)', 
            'Victimization Types(Totals)', 'Un-Met Needs', 'Zip Codes'
        ]

    // loop over all custom report topics to display on screen
        let individualTopic = customReportTopic.map(topic => {
            return (
                <option
                    key={topic}>
                    {topic}
                </option>  
            )
        })
        // console.log('individualTopic', individualTopic);

        // let content = null;

        // if (this.props.user.userName) {
        //     content = (
        //         <div>
        //         <h2> Custom Report Page </h2>
        //         {/* add calendar */}
        //         <form onSubmit={this.submitCustomReport}>
        //             <select className="customReportTopics" multiple>
        //                 {individualTopic}
        //             </select>
        //             <input type="submit" />
        //         </form>

        //         <div className="customReportSpecificTopic">
        //             < CustomAge />
        //             < CustomContactType />
        //             < CustomDisability />
        //             < CustomGender />
        //             < ImmigrantCountryCustom />
        //             < IndividualsServiced/>
        //         </div>
        //         </div>
        //     )
        // }

        return ( 
            <div>
                < ReportingNav / >
                <h2> Custom Report Page </h2>
                {/* add calendar */}
                <form onSubmit={this.submitCustomReport}>
                    <select className="customReportTopics" multiple>
                        {individualTopic}
                    </select>
                    <input type="submit" />
                </form>

                <div className="customReportSpecificTopic">
                    < CustomAge />
                    < CustomContactType />
                    < CustomDisability />
                    < CustomGender />
                    < ImmigrantCountryCustom />
                    < IndividualsServiced/>
                    < CrisisCounseling/>
                    < AdvocacyCivilCustom/>
                    < AdvocacyCriminalCustom/>
                    < AdvocacyMedicalCustom />
                    < AdvocacyOtherCustom />
                    < PhoneServicesCustom />
                    < PoliceReportCustom />
                    < RaceEthnicityCustom />
                    < SexualOrientationCustom />
                    < SpecialClassificationCustom />
                    < SupportOnCallCustom />
                    < TransgenderedCustom />
                    < TransortationCustom />
                    < VictimTypeCustom />
                    < UnmetNeedsCustom />
                    < TypesOfVictimizationCustom />
                    < ZipCodeCustom />
                </div>
            </div>
        ) //end return

    } //end render
} //end class

export default connect(mapStateToProps)(customReportSelectionPage);
