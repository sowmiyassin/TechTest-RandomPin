export default (state = { storedPins: []}, action: any) => {
    switch (action.type) {
     case 'SAVE_ACTION': 
     let storedPins: any = state.storedPins;
      storedPins.push(action.payload);
      return {
       storedPins
      }
     default:
      return state
    }
   }