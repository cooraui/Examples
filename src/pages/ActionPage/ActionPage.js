import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { addEmployeeRequest, getEmployeeRequest, updateEmployeeRequest } from '../../actions/index';
import Swal from 'sweetalert2';
import { FormErrors } from './FormErrors';

class ActionPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            id : '',
            fullname : '',
            email : '',
            job :'',
            title: "Add New Employee",
            btnTitle: "Add",
            formErrors: { fullname: "", email: "", job: ""},
            emailValid: false,
            fullnameValid: false,
            jobValid: false,
            formValid: false
        };
    }

    componentDidMount(){
        var {match} = this.props;
        if(match){
            var id = match.params.id;
            this.props.onEditEmployee(id);
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.employeeEditing){
            var {employeeEditing} = nextProps;
            this.setState({
                id : employeeEditing.id,
                fullname : employeeEditing.fullname,
                email : employeeEditing.email,
                job : employeeEditing.job,
                title: "Edit Information",
                btnTitle: "Save",
                formErrors: { fullname: "", email: "", job: ""},
                emailValid: true,
                fullnameValid: true,
                jobValid: true,
                formValid: true
            })
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({ [name]: value }, () => {
            this.validateField(name, value);
        });
    }

    onSave = (event) => {
        var {id, fullname, email, job} = this.state;
        var {history} = this.props;
        event.preventDefault();

        var employee = {
            id : id,
            fullname : fullname,
            email : email,
            job : job
        };

        if(id){
            this.props.onUpdateEmployee(employee);
            Swal.fire(
                'Information Updated',
                'The changes were saved correctly.',
                'success'
            )
        }else{
            this.props.onAddEmployee(employee);
            Swal.fire(
                'Employee added',
                'It is added correctly.',
                'success'
            )
        }
        history.goBack(); //push("/employee-list")
    }

    validateField(fieldName, value) {

        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let fullnameValid = this.state.fullnameValid;
        let jobValid = this.state.jobValid;

        switch (fieldName) {
            case "email":
                emailValid = value.match(/([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? "" : " is invalid (e.g. mail@example.com)";
                break;
            case "fullname":
                fullnameValid = value.match(/([\D])$/i) && value.length >= 2;
                fieldValidationErrors.fullname = fullnameValid ? "" : " does not contain numbers and must be longer than 2 characters";
                break;
            case "job":
                jobValid = value.match(/([\D])$/i) && value.length >= 3;
                fieldValidationErrors.job = jobValid ? "" : " does not contain numbers and must be longer than 3 characters";
                break;
            default:
                break;
        }
        this.setState(
            {
                formErrors: fieldValidationErrors,
                emailValid: emailValid,
                fullnameValid: fullnameValid,
                jobValid: jobValid
            },
            this.validateForm
        );
    }

    validateForm() {
        this.setState(
            {
                formValid: this.state.emailValid && this.state.fullnameValid && this.state.jobValid
            }
        );
    }

    errorClass(error) {
        return error.length === 0 ? "" : "has-error";
    }

    render() {
        var { fullname, email, job, title, btnTitle } = this.state;
        return (
            <div className="panel panel-info styled">
                <div className="panel-heading">
                    <h3 className="panel-title">{title}</h3>
                </div>
                <div className="panel-body">
                    <FormErrors formErrors={this.state.formErrors} />
                    <form onSubmit={this.onSave}>
                        <div className={`form-group ${this.errorClass(
                            this.state.formErrors.fullname
                        )}`}>
                            <label>Full Name</label>
                            <input 
                                required 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter full name" 
                                name="fullname"
                                value={fullname}
                                onChange={this.onChange}
                            />                        
                        </div>
                        <div className={`form-group ${this.errorClass(
                            this.state.formErrors.email
                        )}`}>
                            <label>Email address</label>
                            <input 
                                required 
                                type="email" 
                                className="form-control" 
                                placeholder="Enter email" 
                                name="email"
                                value={email}
                                onChange={this.onChange}
                            />                        
                        </div>
                        <div className={`form-group ${this.errorClass(
                            this.state.formErrors.job
                        )}`}>
                            <label>Job name</label>
                            <input 
                                required 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter job name" 
                                name="job"
                                value={job}
                                onChange={this.onChange}
                            />                        
                        </div>
                        <Link to="/employee-list">
                            <button type="submit" className="btn btn-danger mr-10">
                                <i className="fas fa-step-backward"></i> Back
                            </button>
                        </Link>
                        <button 
                            type="submit" 
                            className="btn btn-success"
                            disabled={!this.state.formValid}
                        >
                            <i className="fas fa-check-circle"></i> { btnTitle }
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        employeeEditing : state.employeeEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddEmployee: (employee) => {
            dispatch(addEmployeeRequest(employee));
        },
        onEditEmployee: (id) => {
            dispatch(getEmployeeRequest(id));
        },
        onUpdateEmployee: (employee) => {
            dispatch(updateEmployeeRequest(employee))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionPage);