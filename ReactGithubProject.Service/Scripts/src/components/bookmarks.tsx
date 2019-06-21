import React = require("react");
import { BookmarkedRepositioresContext } from "../contexts/bookmarked-repositories-context";

import { GithubService } from "../infrastructure/repositories/GithubService";
import { BookmarkingService } from "../infrastructure/bookmarking/BookmarkingService";
import { RepositoryModel } from "../infrastructure/bookmarking/RepositoryModel";
import {RepositoryGallery} from "./repository/repository-gallery"

// bookmarks page
export class Bookmarks extends React.Component<any, any> {

    static contextType = BookmarkedRepositioresContext


    constructor(props: any, context:any) {
        super(props, context);

    }

    componentDidMount() {
        //this ensures the bookmarks are loaded to the context when the page loads
        this.context.refreshBookmarkedRepositories();
      }

    render() {
        return (
            <React.Fragment>
                <RepositoryGallery repositories={this.context.bookmarkedRepositories} />
            </React.Fragment>

        );
    }
}  