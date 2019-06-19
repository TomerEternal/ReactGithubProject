import React = require("react");
import { RepositioresContext } from "../contexts/repositories-context";

export class RepositoryNameForm extends React.Component<any, any> {

    static contextType = RepositioresContext

    constructor(props: any) {
        super(props);
        this.context = this.context;
        this.state = { searchedName: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        this.setState({ searchedName: event.target.value });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        this.context.search(this.state.searchedName)
    }

    render() {
        return (
            <React.Fragment>
                        <div>{this.context.searchedName}</div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
              <input type="text" value={this.state.searchedName} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </React.Fragment>
        );
    }
}