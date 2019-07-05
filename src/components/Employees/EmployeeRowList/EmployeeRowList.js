/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';


class EmployeeRowList extends Component {

    onDelete = (id) => {
        Swal.fire({
            title: 'Delete this one?',
            text: "This action can not be canceled!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete',
            cancelButtonText: 'No, Cancel'
        }).then((result) => {
            if (result.value) {
                this.props.onDelete(id);
                Swal.fire(
                    'Press OK to back',
                    'The post has been deleted',
                    'success'
                )
            }
        })
    }

    render() {
        var {employees} = this.props;
        return (
          <tbody>
                <tr>
                    <th scope="row">{employees.id}</th>
                    <td>{employees.fullname}</td>
                    <td>{employees.email}</td>
                    <td>{employees.job}</td>
                    <td>
                        <Link 
                            to={`/employee/${employees.id}/edit`}
                            className="btnEdit"
                        >
                            <button type="button" className="btn btn-info mr-10">
                                <i className="fa fa-edit"></i>
                            </button>
                        </Link>
                        <button 
                            type="button" 
                            className="btn btn-danger mr-10"
                            onClick={()=>this.onDelete(employees.id)}
                        ><i className="fas fa-trash-alt"></i></button>
                        <button 
                            type="button" 
                            className="btn btn-warning"
                        ><i className="fas fa-eye"></i></button>
                    </td>
                </tr>
          </tbody>
        );
    }
}

export default EmployeeRowList;