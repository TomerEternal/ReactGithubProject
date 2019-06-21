import React = require("react");
import { RepositioresContext } from "../contexts/repositories-context";
import { RepositoryGalleryItem } from "./repository-gallery-item"
import { RepositoryModel } from "../infrastructure/bookmarking/RepositoryModel";


interface GalleryProps{
    repositories:   RepositoryModel[],
}

export class RepositoryGallery extends React.Component<GalleryProps, any> {

    static contextType = RepositioresContext

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