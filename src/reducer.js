import {FORM_UPDATE} from "./actionTypes.js";

function reducer(state={normal: "", upperCase: "", lowerCase: ""}, action) {
    switch (action.type) {
        case FORM_UPDATE:
            return {normal: action.data, upperCase: action.data.toUpperCase(), lowerCase: action.data.toLowerCase()};
        default:
            return state;
    }
};

export default reducer;