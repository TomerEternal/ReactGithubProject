import React = require("react");
import { RepositioresContext } from "../contexts/repositories-context";

export interface RepositoryGalleryItemProps {
    repositoryName: string,
    repositoryAuthor: string,
    repositoryAuthoAvatarUrl: string,
}


export class RepositoryGalleryItem extends React.Component<RepositoryGalleryItemProps, any> {

    constructor(props: RepositoryGalleryItemProps) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>

                <div>
                    <p>
                        {this.props.repositoryName} :
                    </p>
                    <p>
                        {this.props.repositoryAuthor}
                    </p>
                    <img src={this.props.repositoryAuthoAvatarUrl} />

                </div>
            </React.Fragment>
        );
    }
}