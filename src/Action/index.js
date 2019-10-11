import * as types from './../Constan/ActionType'
export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
};
export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task
    }
};
export const onClose = () => {
    return {
        type: types.ON_CLOSE
    }
};
export const onOpen = () => {
    return {
        type: types.ON_OPEN
    }
};
export const toggle = () => {
    return {
        type: types.TOGGLE_FROM
    }
};
export const deleteTask =(id) => {
    return {
        type: types.DELETE_TASK,
        id: id
    }
};
export const updateFrom =(task)=>{
    return{
        type: types.UPDATE_FROM,
        task: task
    }
    
}