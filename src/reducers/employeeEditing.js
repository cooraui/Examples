import * as Types from '../constants/EmpActionTypes';

var initialState = [];

const employeeEditing = (state = initialState, action) => {
    switch (action.type) {
        case Types.EDIT_EMP:
            return action.employee;
        default:
            return state;
    }
}
export default employeeEditing;