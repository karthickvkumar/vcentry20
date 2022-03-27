const initalState = {
  products : []
}

export default function ProdcutReducer(state = initalState, action){
  console.log(action)
  switch(action.type){
    case "ADD_TO_CART":
      return {...state, products : [...state.products, action.value]}
    default:
     return state
  }
}