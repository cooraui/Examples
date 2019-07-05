import { combineReducers } from 'redux';
import employees from "./employees";
import employeeEditing from "./employeeEditing";


const appReducers = combineReducers({
    employees,
    employeeEditing
});

export default appReducers;