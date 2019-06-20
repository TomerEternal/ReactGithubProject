import React = require("react");
import { RepositioresContext } from "../contexts/repositories-context";


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
        return (

            // <Form>
            //     <Form.Group>
            //         <Form.Label>
            //             Github repository search
            //         </Form.Label>
            //     </Form.Group>
            // </Form>

            <React.Fragment>



                <div>{this.context.repositoryName}</div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
              <input type="text" value={this.state.repositoryName} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </React.Fragment>

        );
    }
}