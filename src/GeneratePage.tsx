import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import './App.css';
import unqiuePinsGenerator from './unqiuePinGenerator';
import { saveAction } from './saveAction';
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
        let self: any = this;
        self.setState({uniquePin: unqiuePinsGenerator()}, function() {
            self.props.saveAction({
                name: '',
                pin: self.state.uniquePin
            });
        });
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
    saveAction: (payload: any) => dispatch(saveAction(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(GeneratePage);
