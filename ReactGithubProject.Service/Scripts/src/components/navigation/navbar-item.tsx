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

            <NavItem>
                <NavLink tag={RRNavLink} activeClassName="active" to={this.props.page}>{this.props.text}</NavLink>
            </NavItem>

        );
    }
}