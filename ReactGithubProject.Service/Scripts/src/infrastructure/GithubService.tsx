export class GithubService {

    private _currentPage: number = 1;

    next = () => this._currentPage++;
    
    prev = () => this._currentPage--;

    async getRepositories(repositoryName: string) {
        return fetch(`https://api.github.com/search/repositories?q=${repositoryName}&page=${this._currentPage}&per_page=10`)
    }
}