

const initilSate = {
    counter : 1,
}


const reducer = (state=initilSate,action)=>{

  if(action.type === 'INCREMENT'){
      return{
        
          counter : state.counter + 2,
      }
  }

    return state;
}


export default reducer;