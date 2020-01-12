import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Tabs, Tab, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import './App.css';
const App: React.FC = () => {
  return (
    <Router>
      
      <Tabs defaultActiveKey="generate" id="uncontrolled-tab-example" variant="pills">
        <Tab eventKey="generate" title="Generate">
         
        </Tab>
        <Tab eventKey="saved" title="Saved">
        
        </Tab>
      </Tabs>
    </Router>
  );
}

export default App;
