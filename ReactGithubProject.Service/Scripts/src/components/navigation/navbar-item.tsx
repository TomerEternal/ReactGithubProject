import React = require("react");

export enum Page {
    search,
    bookmarks,
}

interface NavbarItemProps {
    text: string;
    page: Page;
    activePage: Page;
    setPage(page: Page): void
}

//renders a single nav button
export class NavbarItem extends React.Component<NavbarItemProps, any> {

    constructor(props: any) {
        super(props);

    }

    render() {
        return (
            <li className={`nav-item ${this.props.page === this.props.activePage ? 'active' : ''}`}>
                <a className="nav-link" onClick={() => this.props.setPage(this.props.page)} href="#">
                    {this.props.text}
                </a>
            </li>
        );
    }
}