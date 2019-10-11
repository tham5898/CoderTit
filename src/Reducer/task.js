import * as types from './../Constan/ActionType'
import * as actions from './../Constan/ActionType'
import logo1 from './../img/i11.jpg';
import logo2 from './../img/i12.jpg';
import logo3 from './../img/i13.jpg';
import logo4 from './../img/i14.jpeg';
import logo5 from './../img/i15.jpg';
import logo6 from './../img/i16.jpg';
var findIndex = (task, id) => {
    var result = -1;
    task.forEach((task, index) => {
        if (task.id === id) {
            result = index;
        }
    });
    return result
}
var data = JSON.parse(localStorage.getItem('task'));
var initializeState = data ? data : [
    {
        id: "0001",
        name: "SAMSUM",
        imgage: logo1,
        production: "Trung Quốc",
        price: 30000000,

    },

    {
        id: "0002",
        name: "SAMSUM",
        imgage: logo2,
        production: "Trung Quốc",
        price: 30000000,
    },
    {
        id: "0003",
        name: "SAMSUM",
        imgage: logo3,
        production: "Trung Quốc",
        price: 30000000,
    },
    {
        id: "0004",
        name: "SAMSUM",
        imgage: logo4,
        production: "Trung Quốc",
        price: 30000000,
    },
    {
        id: "0005",
        name: "SAMSUM",
        imgage: logo5,
        production: "Trung Quốc",
        price: 30000000,
    },
    {
        id: "0006",
        name: "SAMSUM",
        imgage: logo6,
        production: "Trung Quốc",
        price: 30000000,
    }
];
const myReducer = (state = initializeState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case actions.ADD_TASK:
            console.log(action);
            var newTask = {
                id: action.task.id,
                name: action.task.name,
                imgage: action.task.imgage,
                production: action.task.production,
                price: action.task.price
            }
            state.push(newTask)
            localStorage.setItem('task', JSON.stringify(state))
            return [...state];
        case actions.DELETE_TASK:
            var id = action.id;
            var index = findIndex(state, id);
            state.splice(index, 1)
            localStorage.setItem('task', JSON.stringify(state))
            return [...state];
            
        default: return [...state]
    }

}
export default myReducer