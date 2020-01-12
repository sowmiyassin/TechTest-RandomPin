export const saveAction = (payload: any) => (dispatch: any) => {
    dispatch({
        type: 'SAVE_ACTION',
        payload
    })
}