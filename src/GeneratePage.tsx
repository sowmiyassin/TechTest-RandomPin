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
        this.state = {
             uniquePin: 'Click on Generate Button below.'
       }
      this.onGenerateHandler = this.onGenerateHandler.bind(this);
    }
    onGenerateHandler() {
   
    }
    render() {
        return (
        <div className="App">
              <h2>Generate Unique Pin</h2>
              <p id="pinDisplay">{this.state.uniquePin}</p>
    <Button variant="primary" onClick={this.onGenerateHandler}>Generate</Button>
        </div>
        )
    }
}
const mapStateToProps = (state: {}) => ({
    ...state
});

const mapDispatchToProps = (dispatch: any) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(GeneratePage);
