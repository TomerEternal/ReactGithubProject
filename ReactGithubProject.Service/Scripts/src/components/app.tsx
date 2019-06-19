import React = require("react");
import { RepositioresContext } from "../contexts/repositories-context";

import { RepositoryNameForm } from "./repository-name-form";


// 
// 
// 
// 

export class App extends React.Component<any, any> {


    constructor(props: any) {
        super(props);

        this.searchRepository = this.searchRepository.bind(this);

        this.state = {
            searchedName: null,
            search: this.searchRepository
        }
    }

    searchRepository(searchedName: string) {
        this.setState({ searchedName: searchedName })
    }

    render() {
        return (
            <RepositioresContext.Provider value={this.state}>
                <RepositoryNameForm />
            </RepositioresContext.Provider>

        );
    }
}