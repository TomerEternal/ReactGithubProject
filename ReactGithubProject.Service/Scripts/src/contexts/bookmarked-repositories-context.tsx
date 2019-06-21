import React = require("react");
import { RepositoryModel } from "../infrastructure/bookmarking/RepositoryModel";
import { BookmarkingService } from "../infrastructure/bookmarking/BookmarkingService";

// a component for giving context 

interface BookmarkedRepositoriesContextParams {
    refreshBookmarkedRepositories(): void,
    bookmarkedRepositories: RepositoryModel[],
}

export const BookmarkedRepositioresContext = React.createContext<BookmarkedRepositoriesContextParams>(null);


interface BookmarkedRepositoriesProviderState{
    bookmarkedRepositories: RepositoryModel[],

}

export class BookmarkedRepositoriesProvider  extends React.Component<any,BookmarkedRepositoriesProviderState> {

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
            <BookmarkedRepositioresContext.Provider value={{
                refreshBookmarkedRepositories: this.refreshBookmarkedRepositories,
                bookmarkedRepositories:this.state.bookmarkedRepositories
            }}>
                {this.props.children}
            </BookmarkedRepositioresContext.Provider>
        )
    }
}