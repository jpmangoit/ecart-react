
import {
    ADD_TO_CART,
    REMOVE_CART,
    GET_TO_CART_ITEMS,
    SAVE_SHIPPING_INFO,
    REMOVE_SINGLE_ITEM,
    REMOVE_QUANTITY,
    PROCESS_CHECKOUT_REQUEST,
    PROCESS_CHECKOUT_SUCCESS,
    PROCESS_CHECKOUT_FAIL

} from "../constant/CartConstant"

export const cartReducer = (state = { cartItems: [], shippingInfo: {}, checkOut: {} }, action) => {

    switch (action.type) {

        case ADD_TO_CART:
            return {
                ...state,
                loading: false,
                success: action.payload
            }

        case GET_TO_CART_ITEMS:

            const item = action.payload

            // const isItemExist = state.cartItems.find((i) => i.product === item.product);
            // if (isItemExist) {
            return {
                ...state,
                cartItems: action.payload ? [action.payload] : []
            };
        // } else {
        //     return {
        //         ...state,
        //         cartItems: [...state.cartItems, item],
        //     };
        // }

        case REMOVE_QUANTITY:
            return {
                ...state,
                success: action.payload
            }

        case REMOVE_SINGLE_ITEM:
            console.log(action, "action");
            let getAllCarts = state.cartItems[0];
            let updatedCarts = getAllCarts.CartItems.filter((item) => item.id !== action.payload);
            state.cartItems[0].CartItems = updatedCarts
            return {
                ...state,
                cartItems: state.cartItems,
            };

        case REMOVE_CART:
            return {
                ...state,
                loading: false,
                isRemove: action.payload,

            }

        case SAVE_SHIPPING_INFO:
            return {
                ...state,
                shippingInfo: action.payload,
            };

        case PROCESS_CHECKOUT_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case PROCESS_CHECKOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                checkOut: action.payload
            }

        case PROCESS_CHECKOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;

    }
}