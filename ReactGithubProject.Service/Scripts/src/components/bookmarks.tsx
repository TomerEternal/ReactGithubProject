import React = require("react");
import { RepositioresContext } from "../contexts/repositories-context";
import { RepositoryGallery } from "./repository-gallery";

import { RepositoryNameForm } from "./repository-name-form";
import { GithubService } from "../infrastructure/repositories/GithubService";
import { BookmarkingService } from "../infrastructure/bookmarking/BookmarkingService";
import { RepositoryModel } from "../infrastructure/bookmarking/RepositoryModel";

export class Bookmarks extends React.Component<any, any> {

    static contextType = RepositioresContext


    constructor(props: any, context:any) {
        super(props, context);

    }

    componentDidMount() {
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