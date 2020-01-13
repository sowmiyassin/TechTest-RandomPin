export const saveAction = (payload: any) => (dispatch: any) => {
    dispatch({
        type: 'SAVE_ACTION',
        payload
    })
}
export const deleteAction = (payload: any) => (dispatch: any) => {
    dispatch({
        type: 'DELETE_ACTION',
        payload
    })
}
export const updateAction = (payload: any) => (dispatch: any) => {
    dispatch({
        type: 'UPDATE_ACTION',
        payload
    })
}