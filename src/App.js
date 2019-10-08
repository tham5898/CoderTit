import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';

const initializeState = {
  count: 100,
  sort:{
    by:'name',
    value:1
  }
}
const countReducer = (state = initializeState, action) => {
  switch (action.type) {
    case 'TANG':
      return{
        count: state.count+1
      }
    case 'GIAM':
     return{
       count:state.count-1
     }
    default:
      return state
  }
}

const store = createStore(countReducer)


function App() {
  return (
    <Provider store={store}> 
  {/* <Count /> */}
    </Provider>
  
  );
}

export default App;
