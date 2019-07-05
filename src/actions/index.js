import * as EmpTypes from '../constants/EmpActionTypes';
import callApi from '../utils/apiCaller';

export const fetchEmployeesRequest = () => {
    return (dispatch) => {
        return callApi('employees', 'GET', null).then(res => {
            dispatch(fetchEmployees(res.data));
        });
    }
}

export const fetchEmployees = (employees) => {
    return {
        type: EmpTypes.FETCH_EMP,
        employees
    }
}

export const deleteEmployeeRequest = (id) => {
    return (dispatch) => {
        return callApi(`employees/${id}`, 'DELETE', null).then(res => {
            dispatch(deleteEmployee(id));
        });
    }
}

export const deleteEmployee = (id) => {
    return {
        type: EmpTypes.DELETE_EMP,
        id
    }
}

export const addEmployeeRequest = (employee) => {
    return (dispatch) => {
        return callApi('employees', 'POST', employee).then(res => {
            dispatch(addEmployee(res.data));
        });
    }
}

export const addEmployee = (employee) => {
    return {
        type: EmpTypes.ADD_EMP,
        employee
    }
}

export const getEmployeeRequest = (id) => {
    return (dispatch) => {
        return callApi(`employees/${id}`,'GET',null).then(res => {
            dispatch(getEmployee(res.data));
        });
    }
}

export const getEmployee = (employee) => {
    return {
        type: EmpTypes.EDIT_EMP,
        employee
    }
}

export const updateEmployeeRequest = (employee) => {
    return (dispatch) => {
        return callApi(`employees/${employee.id}`,'PUT', employee).then(res => {
            dispatch(updateEmployee(res.data));
        });
    }
}

export const updateEmployee = (employee) => {
    return {
        type: EmpTypes.UPDATE_EMP,
        employee
    }
}

export function searchEmployee(value) {
    return {
        type: EmpTypes.SEARCH_EMP, 
        value
    };
  }