import { combineReducers } from 'redux'
import task from './task'
import isDiplayFrom from './isDisplayFrom'
import  itemEditing  from "./itemEditing";
const myReducer = combineReducers({
    task: task,
    isDiplayFrom: isDiplayFrom,
    itemEditing: itemEditing

})
export default myReducer