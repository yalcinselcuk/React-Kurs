import * as actionTypes from "../actions/actionTypes"

const counterReducer = (state = 0, action) => {
    //reducer'ın içinde action çağırılır ve state kontrolü yapılır 
    //yani bizim asıl yaptığımız iş action'a göre state'i belirlemektir
    //genellikle switch-case yazılır
    let newState;

    switch (action.type) {
        case actionTypes.SAYACI_ARTIR:
            return (newState = state + action.payLoad);
        case actionTypes.SAYACI_AZALT:
            return (newState = state - action.payLoad);
        case actionTypes.IKISER_ARTIR:
            return (newState = state + action.payLoad);
        default:
            return state;
    }

};
export default counterReducer;