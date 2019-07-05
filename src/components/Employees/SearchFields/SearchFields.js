import React, { Component } from 'react';

class SearchFields extends Component {
    render() {
        return (
            <tr className="searchBar">
                <th></th>
                <th>
                    <input type="text" name="fullname"  className="form-control"></input>
                </th>
                <th>
                    <input type="text" name="email"  className="form-control"></input>
                </th>
                <th>
                    <input type="text" name="job"  className="form-control"></input>
                </th>
                <th>
                    <button type="submit" className="btn btn-danger myBtn" >Clear</button>
                </th>
            </tr>
        );
    }
}

export default SearchFields;