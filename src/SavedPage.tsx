import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button, Form } from 'react-bootstrap';
import './App.css';
import { deleteAction, updateAction } from './saveAction';
type savedPinsState = {
    savedPins: any
  }
export class SavedPage extends Component<{deleteAction: any, updateAction: any }, savedPinsState> {
    constructor(props: any) {
        super(props);
        console.log(JSON.stringify(props));
        this.state = {
            savedPins: []
        }
        this.renderPins = this.renderPins.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onBlurHandler = this.onBlurHandler.bind(this);
    }
    onDeleteHandler(event: any) {
      this.props.deleteAction({
      pin: event.target.id,
      name: event.target.name
      });
    }
    onBlurHandler(event: any) {
        this.props.updateAction({
            name: event.target.value,
            pin: event.target.id
        });
    }
    UNSAFE_componentWillReceiveProps(nextProps: any) {
        this.setState({savedPins: []});
        this.setState({savedPins: nextProps.saveReducer.storedPins});
    }
    renderPins(rowPin: any, index: any) {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{(rowPin.name && rowPin.name.trim()) ? rowPin.name : <Form.Control type="text" name={rowPin.name} id={rowPin.pin} placeholder="Enter name for a PIN." onBlur={this.onBlurHandler} />}</td>
            <td>{rowPin.pin}</td> 
            <td><Button variant="primary" id={rowPin.pin} onClick={this.onDeleteHandler}>Delete</Button></td>
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
      <th>Action</th>
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
    deleteAction: (payload: any) => dispatch(deleteAction(payload)),
    updateAction: (payload: any) => dispatch(updateAction(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(SavedPage);
