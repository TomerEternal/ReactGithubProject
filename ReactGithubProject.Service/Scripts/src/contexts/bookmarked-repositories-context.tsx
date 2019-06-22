import React = require("react");
import { RepositoryModel } from "../infrastructure/bookmarking/RepositoryModel";
import { BookmarkingService } from "../infrastructure/bookmarking/BookmarkingService";


interface BookmarkedRepositoriesContextParams {
    refreshBookmarkedRepositories(): void,
    bookmarkedRepositories: RepositoryModel[],
}

export const BookmarkedRepositioresContext = React.createContext<BookmarkedRepositoriesContextParams>(null);


interface BookmarkedRepositoriesProviderState{
    bookmarkedRepositories: RepositoryModel[],

}

// a component incharge of managing the bookmarks
// any components wrapped by this provider will be have access to the bookmarked repositories via the contextAPI
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