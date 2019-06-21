import { RepositoryModel } from "./RepositoryModel";

// an infrastructure service incharge of saving and getting bookmarks from the bookmarking server
export class BookmarkingService {

    //added option for paging, incase it will be needed in the future
    async getBookmarkedRepositories(): Promise<RepositoryModel[]> {
        const res = await fetch(`http://localhost:52074/home/GetBookmarkedRepositories`)
        return res.json();
    }

    async bookmarkRepository(repositoryModel: RepositoryModel) {
        const res = await fetch(`http://localhost:52074/home/bookmarkrepository`,{
            method:'post',
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify(repositoryModel)
        });
    }

}