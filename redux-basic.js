
const redux = require('redux');
const createStore = redux.createStore;

// initial state 
const initialSTate = {
    counter : 0,

}

//Reducer
const rootReducer = (state=initialSTate,action) => {

    //Handle Dispatching Action INC_COUNTER

    if(action.type === 'INC_COUNTER'){
        return{
            ...state,
            counter:state.counter + 1
        }
    } 
    
    
    //Handle Dispatching Action ADD_COUNTER

    if(action.type === 'ADD_COUNTER'){
        return{
            ...state,
            counter:state.counter + action.value
        }
    }


  return state;
}


//Store
const store = createStore(rootReducer);

console.log(store.getState());


//Subscription
store.subscribe(() => {
    console.log("[Subscribed] ",store.getState());
});


//Dispatching ACtion

store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER',value:10});



console.log(store.getState());

