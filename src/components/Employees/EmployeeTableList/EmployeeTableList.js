import React, { Component } from 'react';
import '../css/Employee.css';
import SearchFields from '../SearchFields/SearchFields';

class EmployeeTableList extends Component {
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">Employee Table List</div>
                <div className="panel-body">
                    <table className="table table-bordered custom">
                        <thead>
                            <SearchFields></SearchFields>
                            <tr>
                                <th scope="col" className="code">#</th>
                                <th scope="col" >Full Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Job</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        {this.props.children}
                    </table>
                </div>
            </div>
        );
    }
}

export default EmployeeTableList;