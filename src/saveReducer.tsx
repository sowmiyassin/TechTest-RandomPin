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
      let availablePins = state.storedPins.filter(storedpin => storedpin['pin'] !== action.payload);
    return {
     storedPins: availablePins
    }
    break;      
   default:
    return state
  }
 }