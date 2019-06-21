import React = require("react");
import { NavbarItem, Page } from "./navbar-item";

interface NavbarProps {
    activePage: Page,
    setPage(page: Page): void
}

//renders all nav buttons
export class Navbar extends React.Component<NavbarProps, any> {

    constructor(props: any) {
        super(props);

    }

    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <span className="navbar-brand">React Github Project</span>
                    <ul className="navbar-nav">

                        <NavbarItem text="Search" page={Page.search} activePage={this.props.activePage} setPage={this.props.setPage} />
                        <NavbarItem text="Bookmarks" page={Page.bookmarks} activePage={this.props.activePage} setPage={this.props.setPage} />

                    </ul>
            </nav>
        );
    }
}