import React = require("react");
import { RepositioresContext } from "../contexts/repositories-context";
import { RepositoryGallery } from "./repository-gallery";

import { RepositoryNameForm } from "./repository-name-form";
import { GithubService } from "../infrastructure/repositories/GithubService";
import { BookmarkingService } from "../infrastructure/bookmarking/BookmarkingService";
import { RepositoryModel } from "../infrastructure/bookmarking/RepositoryModel";

interface AppState {
    repositoryName: string,
    repositories: RepositoryModel[],
    bookmarkedRepositories: RepositoryModel[],
}

export class App extends React.Component<any, AppState> {


    constructor(props: AppState) {
        super(props);

        this.state = {
            repositoryName: null,
            repositories: [],
            bookmarkedRepositories: [],
        }
    }

    githubService: GithubService = new GithubService();

    bookmarkingService: BookmarkingService = new BookmarkingService();

    searchRepository = async (repositoryName: string, page: number = 1) => {
        if (repositoryName) {
            const repositories = await this.githubService
                .getRepositories(repositoryName, page)
            this.setState(
                {
                    repositoryName: repositoryName,
                    repositories: repositories || [],
                }
            )
        }

    }

    refreshBookmarkedRepositories = async () => {
        const bookmarkedRepositories = await this.bookmarkingService
            .getBookmarkedRepositories() || []
        this.setState({ bookmarkedRepositories: bookmarkedRepositories, })
    }

    render() {
        return (
            <React.Fragment>
                <div className="h-100 w-100">
                    <RepositioresContext.Provider value={{
                        refreshBookmarkedRepositories: this.refreshBookmarkedRepositories
                    }}>
                        <RepositoryNameForm search={this.searchRepository} />
                        <RepositoryGallery repositories={this.state.repositories} bookmarkedRepositories={this.state.bookmarkedRepositories} />
                    </RepositioresContext.Provider>
                </div>
            </React.Fragment>
        );
    }
}