import React = require("react");
import { RepositoryModel } from "../infrastructure/bookmarking/RepositoryModel";

// a repositories context incahrge of sharing the repository data between components

interface RepositoriesContextParams{
    refreshBookmarkedRepositories():void,
}

export const RepositioresContext = React.createContext<any>(null);