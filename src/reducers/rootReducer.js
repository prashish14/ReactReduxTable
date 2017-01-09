export default function listReducer(state = {}, action){
  switch (action.type) {
    case 'UPDATE_SORT':
      return Object.assign({}, state, { filter: action.payload.filter })
    case 'SHOW_MORE':
      return Object.assign({}, state, { displayLength: action.payload.displayLength})
    default:
      return state
  }
}
