let obj = [
  { name: 'baga', age: 21 }
]

export function data(state = obj[0].age, action) {
  switch (action.type) {
    case 'ADD':
      return state + action.data;
      break;
    case 'SUBTRACT':
      return state - action.data;
      break;
    default:
      return state;
      break;
  }
}