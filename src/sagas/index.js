import { takeLatest, put ,delay,fork} from "redux-saga/effects"
import { ADD, ADDASYNC } from "../constants";
export function* gaddAsync() { 
    console.log("gaddAsync被调用了");
    yield fork(delay,2000);
    yield put({type:ADD})
}
export function* watchgaddAsync() { 
    yield console.log("watchgaddAsync被调用了");
    yield takeLatest(ADDASYNC,gaddAsync);
}