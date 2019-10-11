import * as types from './../Constan/ActionType'
var initializeState = {};
var myReducer = (state = initializeState, action) => {
    switch (action.type) {
        case types.UPDATE_FROM:
            console.log(action)
            return state;
        default:
            return state
    }
}
export default myReducer