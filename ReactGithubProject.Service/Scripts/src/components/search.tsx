import React = require("react");

import { RepositoryNameForm } from "./repository/repository-name-form";
import { GithubService } from "../infrastructure/repositories/GithubService";
import { BookmarkingService } from "../infrastructure/bookmarking/BookmarkingService";
import { RepositoryModel } from "../infrastructure/bookmarking/RepositoryModel";
import {RepositoryGallery} from "./repository/repository-gallery"

export interface SearchState {
    repositories: RepositoryModel[],
}

// search page
export class Search extends React.Component<any, SearchState> {

    constructor(props: SearchState) {
        super(props);
        this.state={   
            repositories:[]
        }
    }

    githubService: GithubService = new GithubService();

    //gets the repositories from github
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
                <RepositoryGallery repositories={this.state.repositories} />
            </React.Fragment>

        );
    }
}  