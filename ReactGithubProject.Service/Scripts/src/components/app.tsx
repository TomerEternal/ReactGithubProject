import React = require("react");
import { RepositoriesProvider } from "../contexts/repositories-context";
import { RepositoryGallery } from "./repository-gallery";
import { Navbar } from "./navbar";
import { Search } from "./search";
import { Bookmarks } from "./bookmarks";


import { RepositoryNameForm } from "./repository-name-form";
import { BookmarkingService } from "../infrastructure/bookmarking/BookmarkingService";
import { RepositoryModel } from "../infrastructure/bookmarking/RepositoryModel";
import { Page } from "./navbar-item";

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
                <div className="h-100 w-100">
                    <Navbar setPage={this.setPage} activePage={this.state.activePage} />
                    <RepositoriesProvider>{(() => {
                        switch (this.state.activePage) {
                            case Page.search:
                                return <Search />
                            case Page.bookmarks:
                                return <Bookmarks />
                            default:
                        }
                    })()}
                    </RepositoriesProvider>
                </div>
            </React.Fragment>
        );
    }
}