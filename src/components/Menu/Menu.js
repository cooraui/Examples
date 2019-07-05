import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

const menus = [
    {
        name: " Home",
        path: "/",
        exact: true,
        iconClassName: "fas fa-home"
    },
    {
        name: " Employee List",
        path: "/employee-list",
        exact: false,
        iconClassName: "fas fa-users"
    }
]

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar">
                <ul className="nav navbar-nav">
                    {this.showMenus(menus)}
                </ul>
            </nav>
        );
    }

    showMenus = (menus) =>{
        var result = null;
        if(menus.length > 0){
            result = menus.map((data,i)=>
                <li key={i}>
                    <NavLink
                        key={i}
                        activeClassName="active" 
                        exact={data.exact} 
                        to={data.path} 
                        className="my-link">
                        <i className={data.iconClassName}></i> 
                        {data.name}
                    </NavLink>
                </li>
            )
        }
        return result;
    }
}

export default Menu;