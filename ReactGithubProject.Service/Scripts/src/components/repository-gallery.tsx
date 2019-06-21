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
            <RepositioresContext.Consumer>
                {
                    (({ repositories }) => (

                        <div className="container">
                            <div className="row">
                                {this.context.repositories.map((repository: any) =>
                                    <div className="col-md-4 my-3">
                                        <RepositoryGalleryItem
                                            name={repository.name}
                                            author={repository.owner.login}
                                            authorAvatarUrl={repository.owner.avatar_url}
                                            url={repository.html_url}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
            </RepositioresContext.Consumer>
        );
    }
}  