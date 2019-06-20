import React = require("react");
import { RepositioresContext } from "../contexts/repositories-context";
import { RepositoryGallery } from "./repository-gallery";

import { RepositoryNameForm } from "./repository-name-form";
import { GithubService } from "../infrastructure/GithubService";

export class App extends React.Component<any, any> {


    constructor(props: any) {
        super(props);


        this.githubService = new GithubService();

        this.state = {
            repositoryName: null,
            repositories: [],
            search: this.searchRepository
        }
    }

    githubService: GithubService;

    searchRepository = async (repositoryName: string) => {

        const response = await this.githubService
            .getRepositories(repositoryName)
            .then(response => response.json());

        this.setState({ repositoryName: repositoryName, repositories: response.items }, () => console.log(this))
    }

    render() {
        return (
            <React.Fragment>
                <div style={{height:'100%',width:'100%'}}>
                <RepositioresContext.Provider value={this.state}>
                    <RepositoryNameForm />
                    <RepositoryGallery/>
                </RepositioresContext.Provider>
                    </div>
            </React.Fragment>
        );
    }
}