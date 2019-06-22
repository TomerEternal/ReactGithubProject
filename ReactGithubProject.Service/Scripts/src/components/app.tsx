import React = require("react");
import { BookmarkedRepositoriesProvider } from "../contexts/bookmarked-repositories-context";
import { Search } from "./search";
import { Bookmarks } from "./bookmarks";
import { BrowserRouter as BrowserRouter, Route, Redirect } from "react-router-dom";


import { BookmarkingService } from "../infrastructure/bookmarking/BookmarkingService";
import { RepositoryModel } from "../infrastructure/bookmarking/RepositoryModel";
import { Page } from "./navigation/navbar-item";
import { Navbar } from "./navigation/navbar";

export class App extends React.Component<any, any> {


    constructor(props: any) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="h-100 w-100 d-flex flex-column">

                    <BrowserRouter basename="/Home/Index/">
                        <Redirect exact from="/" to={Page.search} />
                        <Navbar />
                        <BookmarkedRepositoriesProvider>
                            {/* renders the appropriate page based on the currently active page */}
                            <Route path={Page.search} component={Search} />
                            <Route path={Page.bookmarks} component={Bookmarks} />
                        </BookmarkedRepositoriesProvider>
                    </BrowserRouter >
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