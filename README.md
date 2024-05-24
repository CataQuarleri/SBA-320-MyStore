# SBA-320 E-Commerce Project

## Table of Contents
- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Approach Taken](#approach-taken)
- [Live Site](#live-site)
- [Unsolved Problems](#unsolved-problems)

## Introduction
SBA-320 E-Commerce is a web application designed to provide users with a seamless online shopping experience. The project features a comprehensive product listing, search functionality, and a shopping cart. While the core functionalities have been implemented, some features, such as user authentication (login and signup), are still under development.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **React Router**: For handling navigation within the application.
- **Axios**: For making HTTP requests to fetch product data.
- **use-immer**: For managing and mutating state in a more predictable way.
- **CSS Modules**: For styling components in a modular and reusable manner.
- **Vite**: A fast build tool and development server.
- **useReducer**: For managing complex state logic in a more predictable and scalable manner.

## Approach Taken
The project was approached with a component-based architecture that separates components from pages. This allowed for modular development and easier management of the application's state and UI. Implemented a mobile-first design strategy to ensure the application is accessible and visually appealing on all devices. Used axios to make requests to external data source [DummyJSON Products API](https://dummyjson.com/)

### Key components include:
- **Navbar**: Contains the navigation links, search bar, and cart icon.
- **Cart**: Manages the shopping cart overlay and its interactions. The cart is fully functional, displaying items, prices, total prices and amount of items for each element in cart as well as a remove button and add or take items.
- **Search**: Displays the search results based on the user's query.
- **App**: The main application component that integrates all other components and handles routing.

### Key Features Implemented
- **Product Search**: Users can search for products using the search bar in the navbar. The search term is sent to the `Search` component via URL location state from 'react-router-dom'.
- **Category Listing**: Products are categorized, and users can view products by category.
- **Shopping Cart**: Users can add products to the cart, which is managed by the `Cart` component.
- **Carrousel**: Made from scratch using intervals and useEffect.

### Login and Signup Functionality
Due to time constraints, the login and signup functionalities were not fully implemented. However, the foundational code for these features is in place, indicating the planned integration of user authentication. This includes form components and placeholder routes.

## Live Site
You can visit the live site at [MyStore!](https://mystore-sba320-cataq.netlify.app/).

## Unsolved Problems
- **User Authentication**: The login and signup functionalities are incomplete. Future work involves integrating a robust authentication system, likely using JWT and firebase.
- **Product Images**: Some product categories like "mobile accessories" have broken image links. This needs to be addressed by either sourcing reliable images or handling broken links gracefully.
- **Search feature**: The functionality of the search feature is being implemented by useLocation state that comes from the re-render of the Search component, this causes the state to stay behind 1 render. This will be handeled in the future using params or queries.