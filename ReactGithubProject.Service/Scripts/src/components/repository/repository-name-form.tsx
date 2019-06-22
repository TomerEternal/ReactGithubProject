import React = require("react");
import { Jumbotron, Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';

export interface RepositoryNameFormProps {
    search(repositoryName: string, page?: number): void,
}

//search form
export class RepositoryNameForm extends React.Component<RepositoryNameFormProps, any> {

    constructor(props: RepositoryNameFormProps) {
        super(props);
        //since this is a search component it only needs to keep the current name
        this.state = { repositoryName: '' };
    }

    //basic controlled component input pattern
    handleChange = (event: any) => {
        this.setState({ repositoryName: event.target.value });
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        this.props.search(this.state.repositoryName)
    }

    render() {
        return (
            <React.Fragment>
                <div className="jumbotron position-relative">
                    {/* video background */}
                    <video
                        className="card-img-overlay p-0 h-100 w-100"
                        // no objectFit class in bootstrap
                        style={{ objectFit: 'cover' }} 
                        id="video-background" muted={true} autoPlay={true} loop={true}
                    >
                        <source src={`${window.location.origin}/videos/earth.mp4`} type="video/mp4" />
                    </video>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup >
                            <InputGroup>
                                <Input value={this.state.repositoryName} onChange={this.handleChange} type="text" placeholder="please enter a github repository name" />
                                <InputGroupAddon addonType="append">
                                    <Button>Search</Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </FormGroup>
                    </Form>
                </div>
            </React.Fragment>
        );
    }
}