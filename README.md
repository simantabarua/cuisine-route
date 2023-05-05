# Cuisine Route

# [Live Site Link](https://cuisine-route.web.app/)

## Description

#### This is a website that provides recipes from different chefs of a specific cuisine. Users can browse different chefs and view their recipes.

## Technologies Used

- ReactJS
- Tailwin CSS
- Firebase
- Node.js
- Express.js
- JSON
- contextAPI
- React-router-dom
- react-lazy-load
- react-to-pdf

## Installation

To install and run the project locally, follow these steps:
Clone this repository
Install dependencies using npm install
Create a .env file in the root directory and add your Firebase config keys
Run the app using npm start
Openhttp://localhost:5000 in your browser

## Features

- Navbar with website name, Home, Blog, and user profile picture
- Footer present on all pages
- Login page with email/password, Google sign-in, and GitHub sign-in options
- Registration page with name, email, password, and photo URL fields
- Error messages displayed on the Login page when the email/password is incorrect, password is less than 6 characters, or the email/password fields are empty
- Chef section on the homepage with at least six cards displaying chef picture, name, years of experience, number of recipes, likes, and a "View Recipes" button
- Two extra sections on the home pages context API? What is a custom hook? What is useRef? What is useMemo?
- 404 page with a picture
- Firebase config keys hidden using environment variables
- Active route indicated in the navbar

### Bonus Features

- Mobile and desktop responsive homepage (optional tablet responsiveness)
- Private/protected Chef Recipes page that doesn't redirect the user to the login page when reloaded after login
- Lazy loading for chef pictures using react-lazy-load or any other package
- Blog page with a button that downloads a PDF with information about the page using react-to-pdf package
