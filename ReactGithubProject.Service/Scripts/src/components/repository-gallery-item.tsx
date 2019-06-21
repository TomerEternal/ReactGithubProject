import React = require("react");
import { RepositioresContext } from "../contexts/repositories-context";
import { Card, CardBody, Button, CardTitle, CardText, CardFooter, CardImg } from 'reactstrap';
import { RepositoryModel } from "../infrastructure/bookmarking/RepositoryModel";
import { BookmarkingService } from "../infrastructure/bookmarking/BookmarkingService";


export class RepositoryGalleryItem extends React.Component<RepositoryModel, any> {

    static contextType = RepositioresContext


    constructor(props: RepositoryModel) {
        super(props);
    }

    bookmarkingService: BookmarkingService = new BookmarkingService();


    checkIfBookmarked = (repositoryModel: RepositoryModel[]) => {
        console.log(repositoryModel)
        const bookmarkedRepository = repositoryModel
            .find((bookmarkedRepository: RepositoryModel) =>{
                // console.log(bookmarkedRepository.url, this.props.url, bookmarkedRepository.url === this.props.url);

             return bookmarkedRepository && bookmarkedRepository.url === this.props.url
            }
            );

        return bookmarkedRepository != null;
    }

    handleBookmarking = () => {
        this.bookmarkingService.bookmarkRepository(this.props)
        this.context.getBookmarkedRepositories();
    }

    render() {
        return (
            <RepositioresContext.Consumer>
                {

                    (({ bookmarkedRepositories }) => (
                        <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <img src={this.props.authorAvatarUrl} className="card-img-top bg-white" />
                            <CardBody>
                                <a href={this.props.url}>
                                    <CardTitle>{this.props.name}</CardTitle>
                                </a>
                            </CardBody>
                            <CardFooter>
                                <CardText>
                                    <div className="d-flex justify-content-between align-items-end">
                                        <small className="text-muted">created by {this.props.author}</small>

                                        <div>
                                            <Button onClick={this.handleBookmarking} size="sm" color="primary" disabled={this.checkIfBookmarked(bookmarkedRepositories)}>
                                                {this.checkIfBookmarked(bookmarkedRepositories) ?
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
                    ))}
            </RepositioresContext.Consumer>
        );
    }
}