import userReducer from "./reducers/userReducer";

const { combineReducers } = require("redux");

const rootReducer=combineReducers({
userState:userReducer 

})
export default rootReducer