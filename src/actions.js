import {FORM_UPDATE} from "./actionTypes.js";

export function changeValue(str){
    return{
        type: FORM_UPDATE,
        data: str
    }
}