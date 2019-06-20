import React = require("react");
import { RepositioresContext } from "../contexts/repositories-context";
import { RepositoryGalleryItem } from "./repository-gallery-item"

export class RepositoryGallery extends React.Component<any, any> {

    static contextType = RepositioresContext

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">

                    <div className="row">
                        {this.context.repositories.map((repository: any) =>
                            <div className="col-md-4 my-3">
                                <RepositoryGalleryItem 
                                repositoryUrl={repository.html_url}
                                repositoryAuthorAvatarUrl={repository.owner.avatar_url} 
                                repositoryName={repository.name}
                                 repositoryAuthor={repository.owner.login}
                                  />
                            </div>
                        )}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}  