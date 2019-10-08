import * as types from './../Constan/ActionType'
var initializeState = false
var myReducer = (state = initializeState, action) => {
    switch (action.types) {
        case types.TOGGLE_FROM:
            return !state
        case types.ON_OPEN:
            state = true
            return state
        case types.ON_CLOSE:
            state = false
            return state;
        default:
            return state;

    }
}
export default myReducer