export default function updateFilter(filter){
  return { type: 'UPDATE_SORT', payload: {filter: filter} }
}
