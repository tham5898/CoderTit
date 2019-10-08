import { combineReducers } from 'redux'
import task from './task'
import isDiplayFrom from './isDisplayFrom'
const myReducer = combineReducers({
    task: task,
    isDiplayFrom: isDiplayFrom

})
export default myReducer