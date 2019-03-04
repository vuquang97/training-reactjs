import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            return (
                <li className='breadcrumb-item'>
                    <Link to={to} className="my-link">{label}</Link>
                </li>
            )
            //để thêm nhiều class vd: className={ 'class1 ${class2} ' }
        }} />
    )
}

class Menu extends Component {
    render() {
        var menus = [
            {
                name: 'Home',
                to: '/',
                activeOnlyWhenExact: true
            },
            {
                name: 'Admin',
                to: '/admin',
                activeOnlyWhenExact: false
            }
        ]
        return (
            <nav className="navbar navbar-inverse">
                <ul className="nav navbar-nav">
                    {this.showMenus(menus)}
                </ul>
            </nav>
        );
    }

    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink key={ index } label={menu.name} to={menu.to} activeOnlyWhenExact={menu.activeOnlyWhenExact} />
                )
            })
        }
        return result;
    }
}

export default Menu;
