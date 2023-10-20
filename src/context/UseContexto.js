import AppContext from "./Contexto";
import axios from "axios";
import { useReducer } from "react";
import Reducer from "./Reducer";

export default function UseContexto(props) {
    const {children} = props
    const initialState = {
        products:[],
        cart:[]
    }
    const [state, dispatch] = useReducer(Reducer, initialState)
    const getProducts = async () => {
        const response = await axios.get("https://devrockstore-default-rtdb.firebaseio.com/productos.json")
        dispatch({
            type: 'GET_PRODUCTS',
            payload: response.data
        })
    }
    const addCart = (id) => {

    }
    const removeCart = (id) => {

    }
    return (
        <AppContext.Provider value={{
            products: state.products,
            cart: state.cart,
            getProducts,
            addCart,
            removeCart
        }}>
            {children}
        </AppContext.Provider>
    )
}
