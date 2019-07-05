import * as Types from '../constants/EmpActionTypes';

var initialState = [];

var findIndex = (employees, id) => {
    var result = -1;
    employees.forEach((employees, i) => {
        if (employees.id === id) {
            result = i;
        }
    });
    return result;
}

const employees = (state = initialState, action) => {
    var index = -1;
    var { id, employee } = action;
    switch (action.type) {
        case Types.FETCH_EMP:
            state = action.employees;
            return [...state];
        case Types.DELETE_EMP:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        case Types.ADD_EMP:
            state.push(action.employee);
            return [...state];
        case Types.UPDATE_EMP:
            index = findIndex(state, employee.id);
            state[index] = employee;
            return [...state];
        default:
            return [...state];
    }
};

export default employees;