import React = require("react");
import { RepositioresContext } from "../contexts/repositories-context";
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';


export interface RepositoryGalleryItemProps {
    repositoryName: string,
    repositoryAuthor: string,
    repositoryAuthorAvatarUrl: string,
    repositoryUrl: string,
}


export class RepositoryGalleryItem extends React.Component<RepositoryGalleryItemProps, any> {

    constructor(props: RepositoryGalleryItemProps) {
        super(props);
    }

    render() {
        return (
            <React.Fragment >
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardImg top width="100%" src={this.props.repositoryAuthorAvatarUrl} />
                    <CardBody>
                        <a href={this.props.repositoryUrl}>
                            <CardTitle>{this.props.repositoryName}</CardTitle>
                        </a>
                        <CardText>
                            <small className="text-muted">created by {this.props.repositoryAuthor}</small>
                        </CardText>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}