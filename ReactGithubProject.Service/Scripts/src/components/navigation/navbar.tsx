import React = require("react");
import { NavbarItem, Page } from "./navbar-item";

//renders all nav buttons
export class Navbar extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

    }

    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <span className="navbar-brand">React Github Project</span>
                <ul className="navbar-nav">

                    <NavbarItem text="Search" page={Page.search} />
                    <NavbarItem text="Bookmarks" page={Page.bookmarks}/>

                </ul>
            </nav>
        );
    }
}