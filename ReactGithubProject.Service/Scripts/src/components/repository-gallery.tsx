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

                <div>
                    {this.context.repositories.map((repository: any) =>
                        <RepositoryGalleryItem repositoryAuthoAvatarUrl={repository.owner.avatar_url} repositoryName={repository.name} repositoryAuthor={repository.owner.login}>

                        </RepositoryGalleryItem>
                    )}
                </div>
            </React.Fragment>
        );
    }
}