export default (state = { storedPins: []}, action: any) => {
  switch (action.type) {
   case 'SAVE_ACTION': 
   let storedPins: any = state.storedPins;
    storedPins.push(action.payload);
    return {
     storedPins
    }
    break;
   case 'DELETE_ACTION': 
      let availablePins = state.storedPins.filter((storedpin: any) => storedpin['pin'] !== action.payload['pin']);
    return {
     storedPins: availablePins
    }
    break;  
   case 'UPDATE_ACTION': 
      let updatePins = state.storedPins.map((storedpin: any) => {
      if (action.payload['pin'] === storedpin['pin']) {
          storedpin['name'] = action.payload.name;
      }
      return storedpin;
      });
    return {
     storedPins: updatePins
    }
    break;         
   default:
    return state
  }
 }