# Project 3: Coffee Shop Website

## Summary

The aim of this project was to create a e-commerce website for a Coffee Shop using MERN, GraphQL and Stripe. The page has information about the Coffee Shop and a Contact Form, as well as a retail page to buy Coffee Beans etc.

## Table of Contents

- [Technology](#technology)
- [Installation](#installation)
- [Usage](#usage)
- [Live Site](#live-site)

## Technology 

This Project was created with:

- MongoDB
- Express.js
- React.js
- Node.js
- JavaScript
- GraphQL API
- Apollo Server
- Nodemailer
- Google Maps API
- Stripe
- Styled Components

## Installation

After cloning the project to your machine, run the following line of code in your terminal to install the needed packages:

```
npm i
```

## Usage

Once the packages have been installed using the above instructions, run the following command in the terminal to seed the database:

```
npm run seed
```

To start the the applications server, run the following command: 

```
npm start
```

The User viewing this Coffee Shop website will find a home page first, with coffee images as well as opening times and a map. 

After navigating to the Menu page, the User is able to click buttons to see coffee, food and drinks menus. 

On the Contact page, the User will find a contact form, which when filled out will send an email to owner. There is also a phone number, and links to email and book a table. 

When visiting the Shop page, the User is able to browse the products sold by the coffee shop and is able to filter by category. They are able to add a product to the cart, as well as click on the product to read a description. On the product detail page, there is a description as well as an option to add or remove from the cart. 

When adding a product to the cart, if the User is not logged in they will be asked to log in to check out. The User is then able to log in or create an account, and will be redirected back to the shop page. If logged in, the User can checkout and will be redirected to the Stripe checkout page. After filling in their details and checking out, they are then redirected to a Success page and then back to the Home page. 

## Live Site

https://cup-coffee.herokuapp.com/

![Screenshot](client/src/assets/coffee-shop-home.png?raw=true "Screenshot")

![Screenshot](client/src/assets/coffee-shop.png?raw=true "Screenshot")
