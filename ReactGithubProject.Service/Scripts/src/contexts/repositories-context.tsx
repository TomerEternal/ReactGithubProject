import React = require("react");
import { RepositoryModel } from "../infrastructure/bookmarking/RepositoryModel";

// a repositories context incahrge of sharing the repository data between components

interface RepositoriesContextParams{
    refreshBookmarkedRepositories():void,
    search(repositoryName: string, page?: number): void
}

export const RepositioresContext = React.createContext<any>(null);