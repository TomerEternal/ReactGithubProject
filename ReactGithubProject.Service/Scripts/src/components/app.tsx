import React = require("react");
import { RepositioresContext } from "../contexts/repositories-context";
import { RepositoryGallery } from "./repository-gallery";
import { Navbar } from "./navbar";
import { Search } from "./search";

import { RepositoryNameForm } from "./repository-name-form";
import { BookmarkingService } from "../infrastructure/bookmarking/BookmarkingService";
import { RepositoryModel } from "../infrastructure/bookmarking/RepositoryModel";

interface AppState {
    repositoryName: string,
    bookmarkedRepositories: RepositoryModel[],
}

export class App extends React.Component<any, AppState> {


    constructor(props: AppState) {
        super(props);

        this.state = {
            repositoryName: null,
            bookmarkedRepositories: [],
        }
    }


    bookmarkingService: BookmarkingService = new BookmarkingService();


    refreshBookmarkedRepositories = async () => {
        const bookmarkedRepositories = await this.bookmarkingService
            .getBookmarkedRepositories() || []
        this.setState({ bookmarkedRepositories: bookmarkedRepositories, })
    }

    render() {
        return (
            <React.Fragment>
                <div className="h-100 w-100">
                    <Navbar />
                    <RepositioresContext.Provider value={{
                        refreshBookmarkedRepositories: this.refreshBookmarkedRepositories,
                    }}>
                        <Search bookmarkedRepositories={this.state.bookmarkedRepositories} />
                    </RepositioresContext.Provider>
                </div>
            </React.Fragment>
        );
    }
}