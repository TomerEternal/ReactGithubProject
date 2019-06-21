import React = require("react");
import { RepositioresContext } from "../contexts/repositories-context";
import { RepositoryGallery } from "./repository-gallery";

import { RepositoryNameForm } from "./repository-name-form";
import { GithubService } from "../infrastructure/repositories/GithubService";
import { BookmarkingService } from "../infrastructure/bookmarking/BookmarkingService";
import { RepositoryModel } from "../infrastructure/bookmarking/RepositoryModel";

export class Navbar extends React.Component<any, any> {


    constructor(props: any) {
        super(props);

    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand">React Github Project</span>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Bookmarks</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}