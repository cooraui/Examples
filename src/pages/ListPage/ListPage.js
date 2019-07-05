/* eslint-disable no-cond-assign */
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import EmployeeTableList from '../../components/Employees/EmployeeTableList/EmployeeTableList';
import EmployeeRowList from '../../components/Employees/EmployeeRowList/EmployeeRowList';
import '../css/Page.css';
import {connect} from 'react-redux';
import { fetchEmployeesRequest, deleteEmployeeRequest } from '../../actions/index';

class ListPage extends Component {

    componentDidMount(){
        this.props.fetchAllEmployees();
    }

    onDelete = (id) => {
        this.props.onDeleteEmployee(id);
    }

    render() {
        var { employees } = this.props;
        return (
            <div className="container">
                <span className="features">
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <Link to="/employee/add">
                                <button type="button" className="btn btn-info mb-10">
                                    <i className="fas fa-user-plus"></i> New Employee
                                </button>
                            </Link>
                        </div>
                    </div>
                </span>
                <EmployeeTableList>
                    {this.showEmployee(employees)}
                </EmployeeTableList>
            </div>
        );
    }

    showEmployee(employees){
        var result = null;
        if(employees.length > 0){
            result = employees.map((employees,i)=>{
                return (
                    <EmployeeRowList
                        key={i}
                        employees = {employees} 
                        onDelete = {this.onDelete}
                    />
                );
            });
        }
        return result;
    }
}

const mapStateToProps = state =>{
    return {
        employees : state.employees
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllEmployees : () => {
            dispatch(fetchEmployeesRequest())
        },
        onDeleteEmployee : (id) => {
            dispatch(deleteEmployeeRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);