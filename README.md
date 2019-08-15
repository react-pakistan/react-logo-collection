<img src="https://res.cloudinary.com/dq6hflqwx/image/upload/v1565548545/GitHub/React_Pakistan_Storybook_Logo.jpg" alt="React Pakistan - React Logo Collection" width="100%" />

# Logos Library built upon React Storybook
A generic to specific, Logos library for React web apps & React Native apps, following modern approach by building your project's UI in isolation using state of the art Storybook along with React.

Following are some good house keeping rules which every collaborator should adhere to get their PR's merged smoothly;

* Use TypeScript over JavaScript
* Write Unit test or snapshot test for each component you build
* Write story for each component you build
* For code consistency, TSLint, StyleLint and Testing is hooked at the pre-commit hook level, so please keep it enabled all times
* Follow the folder structure and pattern being introduced in this repo

## Stack Details
* [ReactJS](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Storybook](https://storybook.js.org/)
* [Jest](https://jestjs.io/) & [Enzyme](https://airbnb.io/enzyme/) for testing
* [StyledComponents](https://www.styled-components.com/)
* [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) & [CSS FlexBox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Environment Setup
> This project should work equally fine across all three platforms, Mac, Linux & Windows.

#### On MAC
* Install Brew `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
* Install Node `brew install node`

#### On Windows
* Install Chocolatey `@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"`
* Install Node `choco install -y nodejs.install`

### Run This Project
Run following set of commands after cloning this repo off the GitHub link
* `cd react-logo-collection`
* `yarn` or `npm install`
* `yarn start` or `npm start`
* a localhost url on port 9001 will pop in your default browser

> Although you could use NPM, but it is recommended to use yarn instead for this repo.

### Folder Structure
In order to keep a clean and meaningful folder structure across each contributors, please make yourself familiar with the current folder structure and try to adhere to it as much as it is possible.

```
.
├── src
├── common
|   ├── __stories__
|   |   ├── components
|   |   |   ├── h1.story.tsx
|   |   ├── composed
|   |   |   ├── header.story.tsx
|   ├── __test__
|   |   ├── __snapshots__
|   |   └── h1.spec.tsx
|   └── h1
|   ├── projectName
|   |   ├── common
|   |   projectName-styled.app.tsx
|   |   projectName-theme.ts
|  
```
