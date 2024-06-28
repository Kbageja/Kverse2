# Kverse UI Components

Kverse is an npm package that provides a collection of reusable UI components to enhance your web development workflow. This package includes components such as buttons, loaders, forms, toggle switches, and cards. These components are designed to work seamlessly with TailwindCSS, CSS and Vite..



## Installation 

To get started with Kverse, you need to have TailwindCSS and Vite set up in your project. Once that's done, you can install Kverse via npm:

`npm install  kverse`




## Usage

After installing kverse, you can start using the components in your project. Here's an example of how to import and use a button component:

  

    import React from 'react';
    import { Button1 } from 'kverse';
    
    const App = () => {
      return (
        <div>
          <Button1>
          </Button1>
        </div>
      );
    };
    
    export default App;


## TailwindCSS Setup

Make sure TailwindCSS is properly set up in your project. If not, follow the [TailwindCSS installation guide](https://tailwindcss.com/docs/installation) to add it to your project.

## Vite Setup

Ensure that Vite is configured in your project. If not, you can set up a new Vite project by following the Vite guide.

## Available Components

Kverse includes the following components:

-   **Buttons**: Various styles of buttons for different use cases.
-   **Loaders**: Different types of loaders for indicating progress or waiting states.
-   **Forms**: Form components to handle user input.
-   **Toggle Switches**: Switch components for toggling states.
-   **Cards**: Card components for displaying content in a structured format.

## Contributing

We welcome contributions from the community! If you have a feature request, bug report, or want to contribute code, please open an issue or submit a pull request.

## License

This project is licensed under the Apache License. See the LICENSE file for details.
presented as a tree in the file explorer. You can switch from one to another by clicking a file in the tree.


