import {createStore} from "redux";
import rootReducer from "../reducer/index";

export default function configureStore(initalState){
  return createStore(rootReducer, initalState);
}