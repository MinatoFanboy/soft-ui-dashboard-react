# [Soft UI Dashboard React](http://demos.creative-tim.com/soft-ui-dashboard-react/#/dashboards/default?ref=readme-sudpr)

[![NodeJS Version](https://img.shields.io/badge/node-22.1.0-green)](https://nodejs.org/en/download/package-manager) [![ReactJS Version](https://img.shields.io/badge/react-18.3.1-blue)](https://react.dev) [![ReactJS Version](https://img.shields.io/badge/vite-5.4.1-purple)](https://vite.dev)

![Image](https://s3.amazonaws.com/creativetim_bucket/products/499/original/soft-ui-dashboard-pro-material-ui.jpg)

## Setup

### Terminal Commands

1. [Install Node JS](https://nodejs.org/en/download/)
1. Download or clone this repository
1. Install dependencies

    ```bash
    npm install
    ```

1. Start dev server

    ```bash
    npm run dev
    ```

1. Open `localhost:5173` on your browser and start coding 🔥

## Documentation

The documentation for the Soft UI Dashboard is hosted at our [website](https://www.creative-tim.com/learning-lab/react/overview/soft-ui-dashboard/?ref=readme-sudpr).

## Usage:

The repository contains sample UI components for building your application.

Folder structure:

-   **`src`**: Contains all the logic source code of your ReactJS App. Inside the `src` folder:

    -   **`assets/images`**: Images that should be imported directly into bundle source code.
    -   **`assets/theme`**: Stylesheets of MUI Library.
    -   **`components`**: Reusable components written in React.JS.
    -   **`context`**: Global state in your React App.
    -   **`examples`**: A Example is a component written to layouts.
    -   **`hooks`**: Hook to use global state.
    -   **`layouts`**: A Layout is also a component but will act as an entire view and must be registered inside `routes.tsx` as a [Route](https://reactrouter.com/en/main/).
    -   **`types`**: Contains TypeScript type and interface declarations.
    -   **`App.tsx`**: Your main application component.
    -   **`main.tsx`**: Entry point of your React App.
    -   **`routes.tsx`**: Router DOM.

The other files (such as `vite.config.ts`, `tsconfig.json`, `postcss.config.js`) are configurations for libraries used in your application. Visit the library's documentation to learn how to use them.
