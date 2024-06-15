# Task Management App

This repository contains a task management application built using React.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Code Structure and Design](#CodeStructureandDesign)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Introduction

The Task Management App is a web-based application designed to help users organize their tasks effectively. It allows users to create, edit, delete tasks, and mark tasks as completed. The application is built using React, leveraging components to manage state and provide a responsive user interface.

## Features

- **Task Management**: Create, edit, delete tasks.
- **Task Status**: Mark tasks as completed or pending.
- **Sorting**: Sort tasks by title, end date and status.
- **User Interface**: Responsive and user-friendly design.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Code Structure and Design Choices

The project follows a modular structure, organizing components and utilities into separate directories for clarity and maintainability. Here are some design choices:

- **Component-Based Architecture**: Each UI component (e.g., TaskForm, TaskList) encapsulates its logic and UI, promoting reusability.
- **State Management**: Uses React's useState and useEffect hooks for managing component-level state and effects.
- **Styling**: Utilizes Bootstrap for responsive design and custom CSS for additional styling.
- **Testing**: Implements unit tests using Jest and React Testing Library to ensure component functionality and user interaction.

## Technologies Used

- **React**: Frontend JavaScript library for building user interfaces.
- **HTML/CSS**: Structure and styling of the application.
- **JavaScript (ES6+)**: Programming language for application logic.
- **Bootstrap**: CSS framework for responsive design.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
