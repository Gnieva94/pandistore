//TYPES

const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_CART = 'ADD_CART'
const REMOVE_CART = 'REMOVE_CART'

export default function Reducer(state, action) {
    const { type, payload } = action
    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        case ADD_CART:
            return {
                ...state,
                cart: payload
            }
        case REMOVE_CART:
            return {
                ...state,
                cart: payload
            }
    }
}