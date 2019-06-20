import React = require("react");
import { RepositioresContext } from "../contexts/repositories-context";
import { Jumbotron, Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';


export class RepositoryNameForm extends React.Component<any, any> {

    static contextType = RepositioresContext

    constructor(props: any) {
        super(props);
        this.state = { repositoryName: '' };
    }

    handleChange = (event: any) => {
        this.setState({ repositoryName: event.target.value });
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        this.context.search(this.state.repositoryName)
    }

    render() {
        const divStyle = {
            position: 'absolute',
        };
        return (
            <React.Fragment>
                <div className="jumbotron position-relative">
                    <video
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                        }}
                        id="video-background" muted={true} autoPlay={true} loop={true}
                    >
                        <source src={`https://gcs-vimeo.akamaized.net/exp=1561079824~acl=%2A%2F1212112677.mp4%2A~hmac=488ed4dd2b4fd7a87e2905ebaaf2b7f4324d0b607486c0414608b571f1a81125/vimeo-prod-skyfire-std-us/01/2836/12/314181352/1212112677.mp4?download=1&filename=Pexels+Videos+1851190.mp4`} type="video/mp4" />
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