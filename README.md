# React Shop 🛒 - React y Typescript

This is a simple e-commerce application created with React and TypeScript that displays products and allows users to add products to a shopping cart. The application utilizes the useContext and useReducer hooks of React to manage the global state of the cart and also makes use of localStorage to persistently store cart data.

## Demo

[Demo](https://renatoav-react-ts-shopping-cart.netlify.app/)

## Installation

Below are the steps to install and run your project in a local environment.

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/renato-av/react-ecommerce.git
    cd react-ecommerce
    ```

2. **Install dependencies**:

    ```bash
    npm install
    # o
    yarn
    ```

3. **Start the Application**:

    ```bash
    npm run dev
    # o
    yarn dev
    ```

The application will be available at `http://localhost:3000` in your web browser.

## Features

- Displaying a list of products.
- Adding products to the shopping cart.
- Adjusting the quantity of products in the cart.
- Removing products from the cart.
- Persistent storage of the cart in `localStorage`.

## Using useContext and useReducer

This application uses `useContext` and `useReducer` to manage the state of the shopping cart. Contexts are defined in `src/contexts` and are used to provide access to the cart state throughout the application. The  `src/reducers/cart.tsx` file defines the actions and the reducer to manage the shopping cart.

You can add products to the cart, increase or decrease the quantity of products, and remove products from the cart through the functions provided by the context.


## Persistent Storage with localStorage

To ensure that cart data is retained even after closing and reopening the application, `localStorage` is used. Cart data is saved in `localStorage` whenever changes are made to the cart, and it is retrieved upon application load.

## Contributing

Feel free to contribute to this project! You can open issues, suggest new features, or submit pull requests. Any contribution is welcome.

## Autor

- [Renato Arredondo Vela](https://github.com/renato-av)

