import React = require("react");
import { RepositioresContext } from "../contexts/repositories-context";
import { RepositoryGalleryItem } from "./repository-gallery-item"
import { RepositoryModel } from "../infrastructure/bookmarking/RepositoryModel";


interface GalleryProps{
    repositories:   RepositoryModel[],
    bookmarkedRepositories: RepositoryModel[],
}

export class RepositoryGallery extends React.Component<GalleryProps, any> {

    static contextType = RepositioresContext

    constructor(props: GalleryProps) {
        super(props);
    }

    createModel = (repository:any)=>{
        return {
            name:repository.name,
            author:repository.owner.login,
            authorAvatarUrl:repository.owner.avatar_url,
            url:repository.html_url,
        } as RepositoryModel
    }

    render() {
        return (
                        <div className="container">
                            <div className="row">
                                {this.props.repositories.map((repository: any) =>
                                    <div className="col-md-4 my-3">
                                        <RepositoryGalleryItem
                                        bookmarkedRepositories={this.props.bookmarkedRepositories}
                                        model={this.createModel(repository)}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
        );
    }
}  