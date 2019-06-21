import React = require("react");
import { RepositoryModel } from "../infrastructure/bookmarking/RepositoryModel";
import { BookmarkingService } from "../infrastructure/bookmarking/BookmarkingService";

// a repositories context incahrge of sharing the repository data between components

interface RepositoriesContextParams {
    refreshBookmarkedRepositories(): void,
    bookmarkedRepositories: RepositoryModel[],
}

export const RepositioresContext = React.createContext<RepositoriesContextParams>(null);


interface RepositoriesProviderState{
    bookmarkedRepositories: RepositoryModel[],

}

export class RepositoriesProvider  extends React.Component<any,RepositoriesProviderState> {

    constructor(props: any) {
        super(props);
        this.state={
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
            <RepositioresContext.Provider value={{
                refreshBookmarkedRepositories: this.refreshBookmarkedRepositories,
                bookmarkedRepositories:this.state.bookmarkedRepositories
            }}>
                {this.props.children}
            </RepositioresContext.Provider>
        )
    }
}