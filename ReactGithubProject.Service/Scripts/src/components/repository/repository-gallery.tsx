import React = require("react");
import { RepositoryGalleryItem } from "./repository-gallery-item"
import { BookmarkedRepositioresContext } from "../../contexts/bookmarked-repositories-context";
import { RepositoryModel } from "../../infrastructure/bookmarking/RepositoryModel";

interface GalleryProps {
    repositories: RepositoryModel[],
}

//renders provided repositories
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