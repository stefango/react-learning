import { createStore } from "redux";
import { data } from "./reducer";
export let store = createStore(data)