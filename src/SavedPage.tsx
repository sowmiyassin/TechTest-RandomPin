import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import './App.css';
import { saveAction } from './saveAction';
type savedPinsState = {
    savedPins: any
  }
export class SavedPage extends Component<{}, savedPinsState> {
    constructor(props: any) {
        super(props);
   
        this.state = {
            savedPins: []
        }
       
    }
  
    render() {
        return (
            <div className="App">
                {}
    </div>
        )
    }
}
const mapStateToProps = (state: {}) => ({
    ...state
});

const mapDispatchToProps = (dispatch: any) => ({
    saveAction: (payload: any) => dispatch(saveAction(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(SavedPage);
