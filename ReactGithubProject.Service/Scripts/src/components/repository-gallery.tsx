import React = require("react");
import { RepositoryGalleryItem } from "./repository-gallery-item"
import { RepositoryModel } from "../infrastructure/bookmarking/RepositoryModel";
import { BookmarkedRepositioresContext } from "../contexts/bookmarked-repositories-context";

interface GalleryProps {
    repositories: RepositoryModel[],
}

export class RepositoryGallery extends React.Component<GalleryProps, any> {

    static contextType = BookmarkedRepositioresContext

    constructor(props: GalleryProps) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.repositories.map((repository: any) =>
                        <div className="col-md-4 my-3">
                            <RepositoryGalleryItem
                                bookmarkedRepositories={this.context.bookmarkedRepositories}
                                model={repository}
                            />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}  