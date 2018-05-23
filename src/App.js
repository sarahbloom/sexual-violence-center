// Commenting out empty pages!! please comment in when 
// in use.  


import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Home from './components/Home/Home';
// import AdminTools from './components/AdminTools/AdminTools';
import DataEntryPage from './components/DataEntryPage/DataEntryPage';
import PinkForm from './components/PinkForm/PinkForm';
import YellowForm from './components/YellowForm/YellowForm';
import FederalReport from './components/FederalReport/FederalReport';
import CountyReport from './components/CountyReport/CountyReport';
// import CustomReport from './components/CustomReport/CustomReport';
import ReportingPage from './components/ReportingPage/ReportingPage';
// import UserLandingPage from './components/UserLandingPage/UserLandingPage';
import AdminLandingPage from './components/AdminLandingPage/AdminLandingPage';

import UserEntryPage from './components/AdminTools/UserEntryPage';


import './styles/main.css';

const App = () => (
  <div>
    <Header title="SVC" />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route
          path="/login"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/home"
          component={Home}
        />
        {/* <Route
          path="/adminTools"
          component={AdminTools}
        /> */}
        <Route
          path="/telephone"
          component={PinkForm}
        />
        <Route
          path="/in-person"
          component={YellowForm}
        />
        <Route 
        path="/data_entry_page"
        component={DataEntryPage}
        />
        <Route
          path="/FederalReport"
          component={FederalReport}
        />
        <Route
          path="/CountyReport"
          component={CountyReport}
        />
        {/* <Route
          path="/CustomReport"
          component={CustomReport}
        /> */}
        <Route 
        path="/reporting_page"
        component={ReportingPage}
        />
        {/* <Route
          path="/UserLandingPage"
          component={UserLandingPage}
        /> */}
        <Route
          path="/AdminLandingPage"
          component={AdminLandingPage}
        />
        <Route
          path="/UserEntryPage"
          component={UserEntryPage}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;
