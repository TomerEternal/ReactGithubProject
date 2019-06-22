
# React Github Project
## About the project


 - The project was written in MVC.NET, React and Bootstrap 4.
 - The project uses react by transpiling all the tsx files into a bundle.js file and then consuming it in the .cshtml file as a script.
 - I have written only two css rules. Everyhting else is provided by bootstrap which saved  a lot of time on design and bug fixes.


## How to run the project

 1. Pull the repository
 2. Open the folder located at `project folder/ReactGithubProject.Service` with a terminal
 3. Run the command `npm install`
 4. Open the `.sln` file located in the project folder with visual studio and build it
 5. Run the project via IIS Express (press the play button or F5). 

If a message box appears with the message:

> There were build errors, Would you like to continue and run the last
> successful build?

 Press "yes" as it is an internal typescript compiler issue and has nothing to do with the code itself.
## How modify the react code
 - Edit the react files (located at `project folder/ReactGithubProject.Service/Scripts/src`)
 - open the `ReactGithubProject.Service` folder using the terminal and run the command `webpack`. The code will be transpiled and put in `project folder/Scripts/dist`
