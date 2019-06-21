import React = require("react");
import { RepositioresContext } from "../contexts/repositories-context";
import { RepositoryGallery } from "./repository-gallery";

import { RepositoryNameForm } from "./repository-name-form";
import { GithubService } from "../infrastructure/repositories/GithubService";
import { BookmarkingService } from "../infrastructure/bookmarking/BookmarkingService";


export class App extends React.Component<any, any> {


    constructor(props: any) {
        super(props);

        this.state = {
            repositoryName: null,
            repositories: [],
            bookmarkedRepositories: [],
            search: this.searchRepository,
            getBookmarkedRepositories: this.getBookmarkedRepositories,
        }

        this.getBookmarkedRepositories();
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

    getBookmarkedRepositories = async () => {
        const bookmarkedRepositories = await this.bookmarkingService
            .getBookmarkedRepositories() || []
        this.setState({ bookmarkedRepositories: bookmarkedRepositories, })
    }

    render() {
        return (
            <React.Fragment>
                <div className="h-100 w-100">
                    <RepositioresContext.Provider value={this.state}>
                        <RepositoryNameForm />
                        <RepositoryGallery />
                    </RepositioresContext.Provider>
                </div>
            </React.Fragment>
        );
    }
}