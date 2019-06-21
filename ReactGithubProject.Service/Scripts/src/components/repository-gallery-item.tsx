﻿import React = require("react");
import { RepositioresContext } from "../contexts/repositories-context";
import { Card, CardBody, Button, CardTitle, CardText, CardFooter, CardImg } from 'reactstrap';
import { RepositoryModel } from "../infrastructure/bookmarking/RepositoryModel";
import { BookmarkingService } from "../infrastructure/bookmarking/BookmarkingService";


interface RepositoryGalleryItemProps {
    model: RepositoryModel,
    bookmarkedRepositories: RepositoryModel[],
}

export class RepositoryGalleryItem extends React.Component<RepositoryGalleryItemProps, any> {

    static contextType = RepositioresContext


    constructor(props: RepositoryGalleryItemProps) {
        super(props);
    }

    bookmarkingService: BookmarkingService = new BookmarkingService();


    checkIfBookmarked = (repositoryModel: RepositoryModel[]) => {
        const bookmarkedRepository = repositoryModel
            .find((bookmarkedRepository: RepositoryModel) => {
                return bookmarkedRepository && bookmarkedRepository.url === this.props.model.url
            }
            );

        return bookmarkedRepository != null;
    }

    handleBookmarking = () => {
        this.bookmarkingService.bookmarkRepository(this.props.model)
        this.context.refreshBookmarkedRepositories();
    }

    render() {
        return (
            <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <img src={this.props.model.authorAvatarUrl} className="card-img-top bg-white" />
                <CardBody>
                    <a href={this.props.model.url}>
                        <CardTitle>{this.props.model.name}</CardTitle>
                    </a>
                </CardBody>
                <CardFooter>
                    <CardText>
                        <div className="d-flex justify-content-between align-items-end">
                            <small className="text-muted">created by {this.props.model.author}</small>

                            <div>
                                <Button onClick={this.handleBookmarking} size="sm" color="primary" disabled={this.checkIfBookmarked(this.props.bookmarkedRepositories)}>
                                    {this.checkIfBookmarked(this.props.bookmarkedRepositories) ?
                                        <React.Fragment >
                                            bookmarked <i className="fa fa-check"></i>
                                        </React.Fragment >
                                        :
                                        <React.Fragment >
                                            bookmark <i className="fa fa-bookmark"></i>
                                        </React.Fragment >
                                    }
                                </Button>
                            </div>
                        </div>
                    </CardText>
                </CardFooter>
            </Card>
        );
    }
}