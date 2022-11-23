import { ADD, SUB } from "../constants";
export const counter = (state = { count: 0 }, action = {}) => {
    console.log("counter函数被调用了")
    switch (action.type) {
        case ADD:
            return { count: state.count + 1 };
        case SUB:
            return { count: state.count - 1 };
        default:
            return state;
     }
}