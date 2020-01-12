import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import './App.css';


export class SavedPage extends Component<{}> {
    constructor(props: any) {
        super(props);
       
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
  
})
export default connect(mapStateToProps, mapDispatchToProps)(SavedPage);
