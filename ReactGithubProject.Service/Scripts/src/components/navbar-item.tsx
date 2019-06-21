import React = require("react");
import { RepositoryGallery } from "./repository-gallery";

import { RepositoryNameForm } from "./repository-name-form";
import { GithubService } from "../infrastructure/repositories/GithubService";
import { BookmarkingService } from "../infrastructure/bookmarking/BookmarkingService";
import { RepositoryModel } from "../infrastructure/bookmarking/RepositoryModel";


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