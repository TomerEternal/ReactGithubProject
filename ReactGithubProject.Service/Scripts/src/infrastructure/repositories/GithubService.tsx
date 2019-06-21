import { RepositoryModel } from "../bookmarking/RepositoryModel";

// an infrastructure service incharge of fetching data from outside the app
export class GithubService {

    //added option for paging, incase it will be needed in the future
    async getRepositories(repositoryName: string, page: number = 0): Promise<RepositoryModel[]> {

        const res = await fetch(`https://api.github.com/search/repositories?q=${repositoryName}&page=${page}&per_page=12`);

        return (await res.json()).items
            .map((repository: any) => {
                return {
                    name: repository.name,
                    author: repository.owner.login,
                    authorAvatarUrl: repository.owner.avatar_url,
                    url: repository.html_url,
                } as RepositoryModel
            });
    }

}