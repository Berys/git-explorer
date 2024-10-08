# Git Explorer

Git Explorer is a React Native application that allows users to search for GitHub repositories and explore user details. The app provides an intuitive interface to search for users, view their repositories, and see additional details.

## Features

- **User Search**: Search for GitHub users by username.
- **Repository List**: View the list of repositories for a selected user.
- **Repository Details**: Access detailed information about each repository.
- **Responsive UI**: Optimized for both iOS and Android platforms.
- **Error Handling**: Displays appropriate error messages when API requests fail.
- **Loading Indicators**: Shows loaders during data fetches.

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/git-explorer.git
   cd git-explorer
   ```

2. **Install Dependencies**

   ```bash
   pnpm install
   ```

3. **Run the App**
   ```bash
   npx expo start
   # or with Yarn
   pnpm start
   ```

## Usage

1. **Search for Users**: Enter a GitHub username in the search bar to find users.
2. **View Repositories**: Click on a user to see a list of their repositories.
3. **Repository Details**: Click on a repository to see more details about it.

## Project Structure

- **`src/`**: Contains all source code.
  - **`api/`**: API handling code for interacting with GitHub's API.
  - **`features/`**: Grouped application functionalities.
  - **`features/*/components`**: Feature exclusive components like `RepositoryCard`, `UserList`, etc.
  - **`features/*/screens`**: Feature related views.
  - **`ui/`**: UI elements and animations.
  - **`utils/`**: Utility functions and constants.
  - **`navigators/`**: Navigation setup using React Navigation.
  - **`theme/`**: Theme-related configurations like colors, typography, etc.

## Technologies Used

- **React Native**: For building the mobile application.
- **Expo**: To streamline the React Native development process.
- **React Navigation**: For managing navigation between screens.
- **React Query**: For data fetching and caching.
- **TypeScript**: For type safety and better code maintenance.
- **react-native-reanimated**: For animations.
