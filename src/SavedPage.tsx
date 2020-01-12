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
        console.log(JSON.stringify(props));
        this.state = {
            savedPins: []
        }
        this.renderPins = this.renderPins.bind(this);
    }
    UNSAFE_componentWillReceiveProps(nextProps: any) {
        this.setState({savedPins: nextProps.saveReducer.storedPins});
    }
    renderPins(rowPin: any, index: any) {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{`Pin ${index + 1}`}</td>
            <td>{rowPin.pin}</td>
          </tr>
        )
      }
      render() {
        return (
            <div className="App">
                <h2>Saved Pins</h2>
                <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Pin</th>
    </tr>
  </thead>
  <tbody>
    {this.state.savedPins.map(this.renderPins)}
  </tbody>
</Table>
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
