export default function listReducer(state = {}, action){
  switch (action.type) {
    case 'UPDATE_SORT':
      return Object.assign({}, state, { filter: action.payload })
    default:
      return state
  }
}
