

## Description

This application allows yout to search for users and repositories on GitHub using their API based on this rules: https://github.com/luuna-tech/test/blob/master/frontend/README.md

## Features

- **User Search**: Allows searching for users on GitHub.
- **Repository Search**: Allows searching for repositories on GitHub.
- **User Interface**: Utilizes a modern and clean design with `React Native` and `Tailwind CSS` for styling.
- **Navigation**: Uses `React Navigation` to switch between user and repository search screens.
- **Loading and Messages**: Displays a loading message while data is being fetched and a message when no results are found.

# Getting Started

## Step 1: Clone the repository

```bash
git clone https://github.com/EnriqueGarciaB/zebrandsTest
cd zebrandsTest
```

## Step 1: Install dependencies

Make sure you have `Node.js` and `npm` installed. Then, install the project dependencies:

```bash
# using npm
npm install

# OR using Yarn
yarn install
```

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

Then, open the application in a simulator or real device following the instructions for your platform (iOS or Android) in the [React Native CLI documentation](https://reactnative.dev/docs/environment-setup).

## Usage

- **User Search Screen**: Allows you to search for and view details of GitHub users.
- **Repository Search Screen**: Allows you to search for and view details of GitHub repositories.

## Project Structure

- `App.js`: The root component of the application, including context provider and navigation.
- `src/context/Context.js`: Context to manage global state for search data.
- `src/navigation/AppNavigator.js`: Navigation configuration using `React Navigation`.
- `src/components/SearchBar.js`: Component for the search bar.
- `src/components/RepoCard.js`: Component to display repository information.
- `src/components/UserCard.js`: Component to display user information.
- `src/screens/RepoSearchScreen.js`: Screen for searching repositories.
- `src/screens/UserSearchScreen.js`: Screen for searching users.
- `src/styles.js`: Styles file using `StyleSheet`.
