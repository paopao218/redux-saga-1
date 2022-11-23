import { ADD, ADDASYNC, SUB } from "../constants";
export const add = () => { 
    return {
        type:ADD
    }
}
export const sub = () => { 
    return {
        type:SUB
    }
}
export const addAsync = () => ({
    type:ADDASYNC
})