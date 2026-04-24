Add to Cart Task Using Modal

Overview

This project is a ReactJS application that fetches products from the Fake Store API and allows users to add/remove items from a cart displayed in a modal popup. It demonstrates responsive design, state management, and component-based architecture.

Features

Fetch products from Fake Store API

Display product image, title, and price

Add to Cart functionality with duplicate prevention

Navbar with cart count

Modal popup showing cart items

Remove from Cart functionality

Cart total calculation

Responsive design with Tailwind CSS

Tech Stack

ReactJS

Tailwind CSS

JavaScript

Installation

Clone the repository:

git clone <your-repo-url>

Navigate to the project folder:

cd add-to-cart-app

Install dependencies:

npm install

Start the development server:

npm start

Deployment

Deployed on Netlify

Source code hosted on GitHub

How to Run Locally

npm install
npm start

Project Structure

src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── ProductCard.jsx
 │    ├── ProductList.jsx
 │    └── CartModal.jsx
 ├── App.js
 ├── index.js
 └── index.css

Notes

Products are fetched from https://fakestoreapi.com/

Cart modal is responsive and scrollable

Clean, readable, and well-documented code