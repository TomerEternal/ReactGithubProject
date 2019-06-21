import React = require("react");
import { RepositioresContext } from "../contexts/repositories-context";
import { RepositoryGallery } from "./repository-gallery";

import { RepositoryNameForm } from "./repository-name-form";

import { GithubService } from "../infrastructure/repositories/GithubService";
import { BookmarkingService } from "../infrastructure/bookmarking/BookmarkingService";
import { RepositoryModel } from "../infrastructure/bookmarking/RepositoryModel";

export interface SearchProps {
    repositories: RepositoryModel[],
    bookmarkedRepositories: RepositoryModel[],
}

export class Search extends React.Component<SearchProps, any> {


    constructor(props: SearchProps) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <RepositoryNameForm />
                <RepositoryGallery repositories={this.props.repositories} bookmarkedRepositories={this.props.bookmarkedRepositories} />
            </React.Fragment>

        );
    }
}  