import * as actionTypes from './actions';


const initialState = {
  persons: [
    { id: 0, name: 'Brad', age: 55 },
    { id: 1, name: 'Ann', age: 45 },
    { id: 2, name: 'Bill', age: 35 },
    { id: 3, name: 'Jane', age: 25 }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: (Math.random() * 100).toFixed() + 4, // not really unique but good enough here!
        name: action.personData.name,
        age: action.personData.age
      }
      return {
        ...state,
        persons: state.persons.concat(newPerson)
      }
    case actionTypes.DELETE_PERSON:
      let updatedPersons = state.persons.filter(person => person.id !== action.personId)
      return {
        ...state,
        persons: updatedPersons
      }
    default:
      return state;
  }
}

export default reducer;