import { createStore } from 'redux';


const initalState = {
    name: "",
    category: "",
    authorFirst: "",
    authorLast: "",
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY"
export const UPDATE_FIRST = "UPDATE_FIRST"
export const UPDATE_LAST = "UPDATE_LAST"
export const ADD_INGREDIENTS = "ADD_INGREDIENTS"
export const ADD_INSTRUCTIONS = "ADD_INSTRUCTIONS"
export const ADD_RECIPES = "ADD_RECIPES"
export const DELETE_RECIPE = "DELETE_RECIPE"

function reducer(state = initalState, action) {
    const {type, payload} = action
    switch(type){
        case UPDATE_NAME:
            return {...state, name: payload}
        case UPDATE_CATEGORY: 
            return {...state, category: payload}
        case UPDATE_FIRST:
            return {...state, authorFirst: payload}
        case UPDATE_LAST:
            return {...state, authorLast: payload}
        case ADD_INGREDIENTS:
            const newIngredient = [...state.ingredients, payload]
            return {...state, ingredients: newIngredient}
        case ADD_INSTRUCTIONS:
            const newInstructions = [...state.instructions, payload]
            return {...state, instructions: newInstructions}
        case ADD_RECIPES:
                const {
                    name,
                    category,
                    authorFirst,
                    authorLast,
                    ingredients,
                    instructions
                  } = state;
                  const recipe = {
                    name,
                    category,
                    authorFirst,
                    authorLast,
                    ingredients,
                    instructions
                  };
            const newRecipes = [...state.recipes, recipe]
            return {...state, recipes: newRecipes}
        default:
            return state;
    }
}
//HAVE AN ALERT WHEN YOU SELECT DELETE FOR THE USER TO PUTI IN WHAT RECIPE THEY WANT DELETED, THEN DELETE BASED ON RESPONSE
export default createStore(reducer)