import React = require("react");
import { BookmarkedRepositoriesProvider } from "../contexts/bookmarked-repositories-context";
import { Search } from "./search";
import { Bookmarks } from "./bookmarks";


import { BookmarkingService } from "../infrastructure/bookmarking/BookmarkingService";
import { RepositoryModel } from "../infrastructure/bookmarking/RepositoryModel";
import { Page } from "./navigation/navbar-item";
import { Navbar} from "./navigation/navbar";

interface AppState {
    activePage: Page,
}  

export class App extends React.Component<any, AppState> {


    constructor(props: AppState) {
        super(props);

        this.state = {
            activePage: Page.search,
        }

    }


    setPage = (page: Page) => {
        this.setState({ activePage: page });
    }

    render() {
        return (
            <React.Fragment>
                <div className="h-100 w-100 d-flex flex-column">
                    <Navbar setPage={this.setPage} activePage={this.state.activePage} />
                    <BookmarkedRepositoriesProvider>{(() => {

                        //renders the appropriate page based on the currently active page
                        switch (this.state.activePage) {
                            case Page.search:
                                return <Search />
                            case Page.bookmarks:
                                return <Bookmarks />
                            default:
                        }

                    })()}
                    </BookmarkedRepositoriesProvider>
                    <footer className="mt-auto py-3 bg-white">
                        <div className="container">
                            <span className="text-muted">Made by Tomer H.</span>
                        </div>
                    </footer>
                </div>
            </React.Fragment>
        );
    }
}