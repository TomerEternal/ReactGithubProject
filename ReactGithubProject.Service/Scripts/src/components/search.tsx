import React = require("react");
import { RepositioresContext } from "../contexts/repositories-context";
import { RepositoryGallery } from "./repository-gallery";

import { RepositoryNameForm } from "./repository-name-form";
import { GithubService } from "../infrastructure/repositories/GithubService";
import { BookmarkingService } from "../infrastructure/bookmarking/BookmarkingService";
import { RepositoryModel } from "../infrastructure/bookmarking/RepositoryModel";

export interface SearchProps {
    bookmarkedRepositories: RepositoryModel[],
}

export interface SearchState {
    repositories: RepositoryModel[],
}

export class Search extends React.Component<SearchProps, any> {


    constructor(props: SearchProps) {
        super(props);
        this.state={
            repositories:[]
        }
    }
    githubService: GithubService = new GithubService();

    
    searchRepository = async (repositoryName: string, page: number = 1) => {
        if (repositoryName) {
            const repositories = await this.githubService
                .getRepositories(repositoryName, page)
            this.setState(
                {
                    repositories: repositories || [],
                }
            )
        }

    }

    render() {
        return (
            <React.Fragment>
                <RepositoryNameForm search={this.searchRepository} />
                <RepositoryGallery repositories={this.state.repositories} bookmarkedRepositories={this.props.bookmarkedRepositories} />
            </React.Fragment>

        );
    }
}  