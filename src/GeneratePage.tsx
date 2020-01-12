import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import './App.css';

type uniquePinState = {
    uniquePin: any
  }
export class GeneratePage extends Component<{}, uniquePinState> {
    constructor(props: any) {
        super(props);
       
    }

    render() {
        return (
            <div></div>

        )
    }
}
const mapStateToProps = (state: {}) => ({
    ...state
});

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(GeneratePage);
