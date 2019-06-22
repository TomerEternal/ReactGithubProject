import React = require("react");
import { NavLink as RRNavLink } from 'react-router-dom';
import { NavLink, NavItem } from 'reactstrap';

export enum Page {
    search = "/search/",
    bookmarks = "/bookmarks/",
}

interface NavbarItemProps {
    text: string;
    page: Page;
}

//renders a single nav button
export class NavbarItem extends React.Component<NavbarItemProps, any> {

    constructor(props: any) {
        super(props);

    }

    render() {
        return (

            // <NavLink to={this.props.page} className="nav-item" activeClassName="active">{this.props.text} </NavLink>

            <NavItem>
                <NavLink tag={RRNavLink} activeClassName="active" to={this.props.page}>{this.props.text}</NavLink>
            </NavItem>

            // <li className={`nav-item ${this.props.page === this.props.activePage ? 'active' : ''}`}>
            //     <a className="nav-link" onClick={() => this.props.setPage(this.props.page)} href="#">
            //         {this.props.text}
            //     </a>
            // </li>

            // <li>
            //     <NavLink className="nav-item" activeClassName="active" to={this.props.page}>{this.props.text}</NavLink>
            // </li>
        );
    }
}